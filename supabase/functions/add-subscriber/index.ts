import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const body = await req.json();

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

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});