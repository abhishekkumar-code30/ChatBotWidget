window.ChatbotUI = {
  buildDOM(config) {
    // Root
    const widgetRoot = document.createElement("div");
    widgetRoot.className = "ncw-widget";

    // Launcher

    const launcherBtn = document.createElement("button");
    launcherBtn.className = "ncw-launcher";

    const launcherIcon = document.createElement("i");
    launcherIcon.className = "fa-solid fa-brain";

    launcherBtn.appendChild(launcherIcon);

    // Chat Window
    const chatWindow = document.createElement("div");
    chatWindow.className = "ncw-window";

    // Header
    const header = document.createElement("div");
    header.className = "ncw-header";

    const title = document.createElement("span");
    title.className = "ncw-header-title";
    title.textContent = "Header";

    header.appendChild(title);

    // Body
    const body = document.createElement("div");
    body.className = "ncw-body";
    body.textContent = "Messages Go Here";

    // Assemble Chat Window
    chatWindow.append(header, body);

    // Assemble Widget
    widgetRoot.append(chatWindow, launcherBtn);

    document.body.appendChild(widgetRoot);

    return {
      launcherBtn,
      chatWindow,
      header,
      body,
    };
  },
  
createMessageBubble(type, text) {
    const msgEl = document.createElement("div");
    msgEl.className = `ncw-msg ncw-msg-${type}`;
    
    const bubble = document.createElement("div");
    bubble.className = "ncw-msg-bubble";
    bubble.textContent = text;
    
    msgEl.appendChild(bubble);
    return msgEl;
  },
  // NEW: Helper to create quick reply options
  createQuickReplies(options, onSelect) {
    const container = document.createElement("div");
    container.className = "ncw-quick-replies";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "ncw-quick-btn";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => onSelect(opt, container));
      container.appendChild(btn);
    });
    return container;
  }
};