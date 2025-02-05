async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatbox.innerHTML += `<div class='text-right'><span class='bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md'>${userMessage}</span></div>`;
  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
    const dummyResponses = [
      "Hello! How can I assist you today?",
      "I'm just a bot, but I'm here to help!",
      "Can you elaborate on that?",
      "Interesting! Tell me more.",
      "That's a great question! Let me think...",
    ];
    const botMessage =
      dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
    chatbox.innerHTML += `<div class='text-left'><span class='bg-gray-600 px-3 py-1 rounded-lg shadow-md'>${botMessage}</span></div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000);
}
