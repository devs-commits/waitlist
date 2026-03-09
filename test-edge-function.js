// Test script to call the edge function directly
const SUPABASE_URL = "https://klzjehlvjnjskixpabkr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsemplaGx2am5qc2tpeHBhYmtyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTM4MTgzMywiZXhwIjoyMDgwOTU3ODMzfQ.xA4QUqjifsNdAKwr7ViTUGEI0B8Fi-byZpVzUPk2zbc";

const testData = {
  firstName: "Test",
  lastName: "User",
  email: "test@example.com",
  whatsapp: "+1234567890",
  linkedin: "https://linkedin.com/in/testuser"
};

console.log("🧪 Testing Edge Function...\n");
console.log("URL:", `${SUPABASE_URL}/functions/v1/add-subscriber`);
console.log("Payload:", testData);
console.log("\n📤 Sending request...\n");

fetch(`${SUPABASE_URL}/functions/v1/add-subscriber`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  },
  body: JSON.stringify(testData),
})
  .then((response) => {
    console.log("✅ Response Status:", response.status, response.statusText);
    console.log("Response Headers:", Object.fromEntries(response.headers));
    return response.json().then((data) => ({ status: response.status, data }));
  })
  .then(({ status, data }) => {
    console.log("\n📋 Response Body:");
    console.log(JSON.stringify(data, null, 2));
    
    if (status === 200) {
      console.log("\n✅ SUCCESS! Data was saved to database and sent to MailerLite");
    } else {
      console.log("\n❌ ERROR! Check the response above for details");
    }
  })
  .catch((error) => {
    console.error("❌ Network error:", error.message);
  });
