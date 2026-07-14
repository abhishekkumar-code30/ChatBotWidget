window.ChatbotUI = {
  buildDOM(config) {
    const widgetRoot = document.createElement("div");
    widgetRoot.className = "ncw-widget";

    const launcherBtn = document.createElement("button");
    launcherBtn.className = "ncw-launcher";
    launcherBtn.setAttribute("aria-label", "Toggle Chat");

    const launcherIcon = document.createElement("i");
    launcherIcon.className = "fa-solid fa-brain";
    launcherBtn.appendChild(launcherIcon);

    const chatWindow = document.createElement("div");
    chatWindow.className = "ncw-window";

    const header = document.createElement("div");
    header.className = "ncw-header";

    const headerLeft = document.createElement("div");
    headerLeft.className = "ncw-header-left";

    const avatarContainer = document.createElement("div");
    avatarContainer.className = "ncw-avatar-container";
    const headAvatarIcon = document.createElement("i");
    headAvatarIcon.className = "fa-solid fa-robot";
    avatarContainer.appendChild(headAvatarIcon);

    const statusDot = document.createElement("span");
    statusDot.className = "ncw-status-dot";
    avatarContainer.appendChild(statusDot);

    const headerInfo = document.createElement("div");
    headerInfo.className = "ncw-header-info";

    const title = document.createElement("span");
    title.className = "ncw-header-title";
    title.textContent = config.botName || "Brain Assistant";

    const subtitle = document.createElement("span");
    subtitle.className = "ncw-header-subtitle";
    subtitle.textContent = "Online • Replies instantly";

    headerInfo.append(title, subtitle);
    headerLeft.append(avatarContainer, headerInfo);

    const closeHeaderBtn = document.createElement("button");
    closeHeaderBtn.className = "ncw-header-close";
    closeHeaderBtn.setAttribute("aria-label", "Minimize window");

    const closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-chevron-down";
    closeHeaderBtn.appendChild(closeIcon);

    header.append(headerLeft, closeHeaderBtn);

    const body = document.createElement("div");
    body.className = "ncw-body";

    const footer = document.createElement("div");
    footer.className = "ncw-footer";

    const footerText = document.createTextNode("Powered by ");
    const footerLink = document.createElement("a");
    footerLink.className = "ncw-footer-link";
    footerLink.href = "#";
    footerLink.textContent = config.companyName || "NovaCloud";

    footer.append(footerText, footerLink);

    chatWindow.append(header, body, footer);
    widgetRoot.append(chatWindow, launcherBtn);
    document.body.appendChild(widgetRoot);

    return {
      widgetRoot,
      launcherBtn,
      chatWindow,
      closeHeaderBtn,
      body,
    };
  },

  createMessageBubble(type, text) {
    const msgEl = document.createElement("div");
    msgEl.className = "ncw-msg";

    if (type === "bot") {
      msgEl.classList.add("ncw-msg-bot");

      const avatar = document.createElement("div");
      avatar.className = "ncw-msg-avatar";
      const icon = document.createElement("i");
      icon.className = "fa-solid fa-robot";
      avatar.appendChild(icon);
      msgEl.appendChild(avatar);
    } else {
      msgEl.classList.add("ncw-msg-user");
    }

    const bubble = document.createElement("div");
    bubble.className = "ncw-msg-bubble";
    bubble.textContent = text;
    msgEl.appendChild(bubble);

    return msgEl;
  },

  createQuickReplies(options, onSelect) {
    const container = document.createElement("div");
    container.className = "ncw-quick-replies";

    options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "ncw-quick-btn";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => onSelect(opt, container));
      container.appendChild(btn);
    });

    return container;
  },

  createTypingIndicator() {
    const el = document.createElement("div");
    el.className = "ncw-typing";
    el.id = "ncw-typing";

    const avatar = document.createElement("div");
    avatar.className = "ncw-msg-avatar";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-robot";
    avatar.appendChild(icon);
    el.appendChild(avatar);

    const bubble = document.createElement("div");
    bubble.className = "ncw-typing-bubble";

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("span");
      dot.className = "ncw-typing-dot";
      bubble.appendChild(dot);
    }

    el.appendChild(bubble);
    return el;
  },
};