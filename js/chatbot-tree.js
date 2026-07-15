window.ChatbotTree = {
 
  start: {
    text: "👋 Welcome! I'm your virtual assistant.\n\nChoose one of the options below and I'll help you find what you're looking for.",
    options: [
      { label: "🚀 Features",    next: "features" },
      { label: "🏢 Departments", next: "departments" },
      { label: "❓ FAQ",          next: "faq" },
      { label: "📞 Contact",      next: "contact" }
    ]
  },
 
  // FEATURES
  features: {
    text: "Here's what we offer. Want details on any of these?",
    options: [
      { label: "⚡ Fast Setup",    next: "feat_setup" },
      { label: "🔒 Security",      next: "feat_security" },
      { label: "🎨 Customization", next: "feat_custom" },
      { label: "⬅️ Back",          next: "back" }
    ]
  },
  feat_setup: {
    text: "Get up and running in minutes — no complex config, just plug in your API keys and go.",
    options: [
      { label: "⬅️ Back to Features", next: "features" },
      { label: "🏠 Main Menu",        next: "restart" }
    ]
  },
  feat_security: {
    text: "All data is encrypted in transit and at rest. We follow industry-standard practices for access control.",
    options: [
      { label: "⬅️ Back to Features", next: "features" },
      { label: "🏠 Main Menu",        next: "restart" }
    ]
  },
  feat_custom: {
    text: "Themes, colors, and conversation flows are fully editable — this whole bot is just a JS object you can reshape.",
    options: [
      { label: "⬅️ Back to Features", next: "features" },
      { label: "🏠 Main Menu",        next: "restart" }
    ]
  },
 
  // DEPARTMENTS
  departments: {
    text: "Which department are you looking for?",
    options: [
      { label: "💻 Technical Support", next: "dept_tech" },
      { label: "💰 Sales",             next: "dept_sales" },
      { label: "🧑‍💼 HR",               next: "dept_hr" },
      { label: "⬅️ Back",              next: "back" }
    ]
  },
  dept_tech: {
    text: "Technical Support handles bugs, integrations, and setup issues.\n\n📧 support@company.com",
    options: [
      { label: "⬅️ Back to Departments", next: "departments" },
      { label: "🏠 Main Menu",           next: "restart" }
    ]
  },
  dept_sales: {
    text: "Sales handles pricing, plans, and custom quotes.\n\n📧 sales@company.com",
    options: [
      { label: "⬅️ Back to Departments", next: "departments" },
      { label: "🏠 Main Menu",           next: "restart" }
    ]
  },
  dept_hr: {
    text: "HR handles hiring, internships, and general people questions.\n\n📧 hr@company.com",
    options: [
      { label: "⬅️ Back to Departments", next: "departments" },
      { label: "🏠 Main Menu",           next: "restart" }
    ]
  },
 
  // FAQ
  faq: {
    text: "Common questions — pick one:",
    options: [
      { label: "💳 Pricing",      next: "faq_pricing" },
      { label: "🔄 Refunds",      next: "faq_refunds" },
      { label: "🌍 Availability", next: "faq_availability" },
      { label: "⬅️ Back",         next: "back" }
    ]
  },
  faq_pricing: {
    text: "Pricing depends on your plan and usage — check the Pricing page or ask Sales for a custom quote.",
    options: [
      { label: "⬅️ Back to FAQ", next: "faq" },
      { label: "🏠 Main Menu",   next: "restart" }
    ]
  },
  faq_refunds: {
    text: "Refunds are handled case-by-case within 14 days of purchase. Contact support with your order ID.",
    options: [
      { label: "⬅️ Back to FAQ", next: "faq" },
      { label: "🏠 Main Menu",   next: "restart" }
    ]
  },
  faq_availability: {
    text: "We're available online 24/7. Human support responds within 1 business day.",
    options: [
      { label: "⬅️ Back to FAQ", next: "faq" },
      { label: "🏠 Main Menu",   next: "restart" }
    ]
  },
 
  // CONTACT
  contact: {
    text: "How would you like to reach us?",
    options: [
      { label: "📧 Email",   next: "contact_email" },
      { label: "☎️ Phone",   next: "contact_phone" },
      { label: "🌐 Socials", next: "contact_socials" },
      { label: "⬅️ Back",    next: "back" }
    ]
  },
  contact_email: {
    text: "We usually reply within 24 hours.\n\n📧 hello@company.com",
    options: [
      { label: "⬅️ Back to Contact",   next: "contact" },
      { label: "🏠 Main Menu",         next: "restart" }
    ]
  },
  contact_phone: {
    text: "Mon–Fri, 10am–6pm IST.\n\n☎️ +91-1234567890",
    options: [
      { label: "⬅️ Back to Contact", next: "contact" },
      { label: "🏠 Main Menu",       next: "restart" }
    ]
  },
  contact_socials: {
    text: "Find us on GitHub, LinkedIn, and Twitter — links are in the footer.",
    options: [
      { label: "⬅️ Back to Contact", next: "contact" },
      { label: "🏠 Main Menu",       next: "restart" }
    ]
  }
 
};