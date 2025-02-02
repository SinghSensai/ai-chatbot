// script.js
// Model settings state
const modelSettings = {
  temperature: 0.7,
  topP: 0.9,
  maxTokens: 1000,
};

function updateSettingValue(setting) {
  const input = document.getElementById(setting);
  const valueDisplay = document.getElementById(`${setting}-value`);
  const value = input.value;

  valueDisplay.textContent = value;
  modelSettings[setting] = parseFloat(value);

  console.log("Updated model settings:", modelSettings);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return;

  // Add user message
  addMessage(message, true);

  // Clear input
  input.value = "";

  // Simulate bot response with current settings
  setTimeout(() => {
    const responses = [
      "I understand. Could you tell me more about that?",
      "That's interesting! Let me help you with that.",
      "I see what you mean. Here's what I think...",
      "Thanks for sharing. Could you clarify something for me?",
    ];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    addMessage(
      `[T:${modelSettings.temperature} P:${modelSettings.topP}] ${randomResponse}`,
      false
    );
  }, 1000);
}

function addMessage(text, isUser) {
  const messagesDiv = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "bot"}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = isUser ? "U" : "AI";

  const content = document.createElement("div");
  content.className = "message-content";
  content.textContent = text;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  messagesDiv.appendChild(messageDiv);

  // Scroll to bottom
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Allow sending message with Enter key
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
