let launcherBtn = null;
let chatWindow = null;
let closeHeaderBtn = null;
let bodyEl = null; 
let isOpen = false;
let currentTree = null;
let hasStarted = false;

let currentNodeKey = "start";
let history = []; 

function init() {
  currentTree = window.ChatbotTree;

  const elements = window.ChatbotUI.buildDOM({ 
    botName: "Brain Agent",
    companyName: "NovaCloud"
  });

  launcherBtn = elements.launcherBtn;
  chatWindow = elements.chatWindow;
  closeHeaderBtn = elements.closeHeaderBtn;
  bodyEl = elements.body;

  launcherBtn.addEventListener("click", toggleWidget);

  closeHeaderBtn.addEventListener("click", closeWidget);
}

function toggleWidget() {
  isOpen = !isOpen;
  if (isOpen) {
    chatWindow.classList.add("ncw-open");
    
    if (!hasStarted) {
      hasStarted = true;
      showBotResponse("start");
    }
  } else {
    chatWindow.classList.remove("ncw-open");
  }
}

function closeWidget() {
  isOpen = false;
  chatWindow.classList.remove("ncw-open");
}

function showTyping() {
  const typingEl = window.ChatbotUI.createTypingIndicator();
  bodyEl.appendChild(typingEl);
  bodyEl.scrollTop = bodyEl.scrollHeight;
}

function removeTyping() {
  const typingEl = document.getElementById("ncw-typing");
  if (typingEl) {
    typingEl.remove();
  }
}

function showBotResponse(nodeKey) {
  currentNodeKey = nodeKey;
  const node = currentTree[nodeKey];
  if (!node) return;

  showTyping();

  setTimeout(() => {
    removeTyping();

    const botBubble = window.ChatbotUI.createMessageBubble("bot", node.text);
    bodyEl.appendChild(botBubble);

    if (node.options && node.options.length > 0) {
      const optionsRow = window.ChatbotUI.createQuickReplies(node.options, (selectedOpt, container) => {
        container.remove();
        
        const userBubble = window.ChatbotUI.createMessageBubble("user", selectedOpt.label);
        bodyEl.appendChild(userBubble);

        if (selectedOpt.next === "back") {
          goBack();
        } else if (selectedOpt.next === "restart" || selectedOpt.next === "start") {
          history = [];
          showBotResponse("start");
        } else {
          history.push(currentNodeKey);
          showBotResponse(selectedOpt.next);
        }
      });
      
      bodyEl.appendChild(optionsRow);
    }

    bodyEl.scrollTop = bodyEl.scrollHeight;
  }, 1000 + Math.random() * 500);
}

function goBack() {
  if (history.length === 0) {
    showBotResponse("start");
    return;
  }

  const prevKey = history.pop();
  showBotResponse(prevKey);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}