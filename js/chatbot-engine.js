let launcherBtn = null;
let chatWindow = null;
let isOpen = false;

function init() {
  const elements = window.ChatbotUI.buildDOM({ position: "right" });
  
  launcherBtn = elements.launcherBtn;
  chatWindow = elements.chatWindow;

  // click handler
  launcherBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.add("ncw-open");
    } else {
      chatWindow.classList.remove("ncw-open");
    }
  });
}

// Checks body element existance before running init()
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}