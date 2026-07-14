let launcherBtn = null;
let chatWindow = null;
let bodyEl = null; // Container where chat bubbles will go
let isOpen = false;
let currentTree = null;
let hasStarted = false;

function init() {
  currentTree = window.ChatbotTree;

  const elements = window.ChatbotUI.buildDOM({ position: "right" });
  launcherBtn = elements.launcherBtn;
  chatWindow = elements.chatWindow;
  bodyEl = elements.body;

  // Toggle Widget Panel
  launcherBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.add("ncw-open");
      
      // Start the conversation loop when opened for the first time
      if (!hasStarted) {
        hasStarted = true;
        showBotResponse("start");
      }
    } else {
      chatWindow.classList.remove("ncw-open");
    }
  });
}

// Show a response with tree options
function showBotResponse(nodeKey) {
  const node = currentTree[nodeKey];
  if (!node) return;

  // 1. Render Bot text message bubble
  const botBubble = window.ChatbotUI.createMessageBubble("bot", node.text);
  bodyEl.appendChild(botBubble);
  
  // 2. Render options if they exist
  if (node.options && node.options.length > 0) {
    const optionsRow = window.ChatbotUI.createQuickReplies(node.options, (selectedOpt, container) => {
      // Clean up/remove option buttons after click
      container.remove();
      
      // Render user message choice bubble
      const userBubble = window.ChatbotUI.createMessageBubble("user", selectedOpt.label);
      bodyEl.appendChild(userBubble);
      
      // Load next bot node response
      setTimeout(() => {
        showBotResponse(selectedOpt.next);
      }, 500); // 500ms delay for natural dialogue timing
    });
    
    bodyEl.appendChild(optionsRow);
  }

  // Scroll to bottom
  bodyEl.scrollTop = bodyEl.scrollHeight;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}