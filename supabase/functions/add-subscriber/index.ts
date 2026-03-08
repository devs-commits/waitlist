import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  try {
    const body = await req.json();

    if (!body.email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL"),
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
    );

    // Save to database
    const { error } = await supabase.from("waitlist").insert({
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      whatsapp: body.whatsapp,
      linkedin: body.linkedin,
    });

    if (error) throw error;

    // Send to MailerLite
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("MAILERLITE_API_KEY")}`,
        },
        body: JSON.stringify({
          email: body.email,
          fields: {
            name: body.firstName,
            last_name: body.lastName,
            whatsapp: body.whatsapp,
            linkedin: body.linkedin,
          },
          groups: [Deno.env.get("MAILERLITE_GROUP_ID")],
          status: "active",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "MailerLite failed", details: data }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err : any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
});