window.ChatbotTree = {
  start: {
    text: "Welcome to the Brain assistant! 🧠 How can I help you today?",
    options: [
      { label: "Tell me a joke", next: "joke" },
      { label: "System Status", next: "status" }
    ]
  },
  joke: {
    text: "Why did the computer go to the doctor? \n\nBecause it had a virus! 💻",
    options: [
      { label: "Haha, start over", next: "start" }
    ]
  },
  status: {
    text: "All neural networks are operational. Uptime: 99.99% ✅",
    options: [
      { label: "Back to main menu", next: "start" }
    ]
  }
};