document.getElementById("leadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const messageBox = document.getElementById("message");
  messageBox.innerHTML = "Submitting...";

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    course_id: 1,
    source_id: 2,
    priority: "high",
    notes: "From Form UI"
  };

  try {
    // 🔥 DEMO MODE (no backend needed)
    setTimeout(() => {
      console.log("Form Data:", data);

      messageBox.innerHTML = "✅ Lead Submitted Successfully (Demo Mode)";
      document.getElementById("leadForm").reset();
    }, 1000);

  } catch (err) {
    messageBox.innerHTML = "❌ Something went wrong";
  }
});