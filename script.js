let awaitingName = false;

document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = "Hello, how can I help you?";
  chatBox.appendChild(botMsg);
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input.value) return;

  // Add user message bubble
  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // Generate bot response
  const botMsg = document.createElement("div");
  botMsg.classList.add("message", "bot");
  botMsg.textContent = getMockResponse(input.value);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getMockResponse(userInput) {
  const lowerInput = userInput.toLowerCase();

  if (awaitingName) {
    awaitingName = false;
    if (lowerInput === "nicelle alvarez") {
      return "Sending out daily crew street sheets and monitoring damage complaints.";
    } else if (lowerInput === "joshua guinto") {
      return "Redlines and closing out projects.";
    } else {
      return "Sorry, I don't understand.";
    }
  }

  if (lowerInput.includes("what are my tasks")) {
    awaitingName = true;
    return "Please send me your full name.";
  }

  return "Sorry, I don't understand.";
}
