function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input.value) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // Mock AI response
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = getMockResponse(input.value);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getMockResponse(userInput) {
  // Simple fake responses – you can expand later
  if (userInput.toLowerCase().includes("wip")) {
    return "WIP items are tracked in the Master Tracker. Jobs over 120 days must be escalated.";
  } else if (userInput.toLowerCase().includes("redline")) {
    return "Redlines must include date, address, unit codes, and GPS/time-stamped photos.";
  } else if (userInput.toLowerCase().includes("qa")) {
    return "QA requires GIS Photos, As-Builts, OTDR traces, and splice documentation.";
  } else {
    return "This is a mock AI. Live responses will appear once the API is connected.";
  }
}
