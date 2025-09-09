let conversationHistory = [];
let awaitingName = false;

document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = "Welcome to the MasTec AI Assistant. How can I help you today?";
  chatBox.appendChild(botMsg);
  conversationHistory.push({ role: "assistant", content: botMsg.textContent });
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input.value) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);
  conversationHistory.push({ role: "user", content: input.value });

  // Bot reply
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = getMockResponse(input.value);
  chatBox.appendChild(botMsg);
  conversationHistory.push({ role: "assistant", content: botMsg.textContent });

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getMockResponse(userInput) {
  const lower = userInput.toLowerCase();

  if (lower.includes("what are my tasks")) {
    awaitingName = true;
    return "Please send me your full name.";
  }

  if (awaitingName) {
    awaitingName = false;
    if (lower.includes("nicelle alvarez")) {
      return "Sending out daily crew street sheets and monitoring damage complaints.";
    }
    if (lower.includes("joshua guinto")) {
      return "Redlines and closing out projects.";
    }
    return "Sorry, I don’t have your tasks on record.";
  }

  return "Sorry, I don’t understand.";
}
