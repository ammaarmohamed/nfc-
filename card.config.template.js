/**
 * ====================================================================
 * DIGITAL BUSINESS CARD — STARTER TEMPLATE
 * ====================================================================
 * Copy this file to `card.config.js` to create a new personalized card.
 * Replace the sample values below with your own details.
 */

window.CARD_CONFIG = {
  // 1. Page Metadata & SEO
  meta: {
    title: "Your Name - Digital Business Card",
    description: "Job Title at Company | Tap to connect and save contact.",
    ogImage: "/assets/profile.jpg",
    themeColor: "#06130e"
  },

  // 2. Color Theme Configuration
  // Options: 'emerald' (Emerald & Gold) | 'sapphire' (Midnight Sapphire) | 'amber' (Warm Amber & Gold) | 'carbon' (Stealth Carbon)
  theme: {
    defaultTheme: "emerald",
    allowThemeSwitcher: true,
    storageKey: "my_card_theme"
  },

  // 3. Profile Information
  profile: {
    name: "Alex Rivera",
    initials: "AR",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    verified: true,
    
    // Status pill shown at top left
    statusPill: {
      enabled: true,
      text: "Available for Projects"
    },

    // Primary & Secondary Dual Affiliations
    primaryRole: {
      title: "Design Director",
      company: "Studio Vanguard"
    },
    
    secondaryAffiliation: {
      enabled: true,
      title: "Board Member",
      organization: "Creative Tech Guild",
      shortOrg: "CTG",
      logo: "", // Optional URL to organization logo or crest
      url: "https://example.com"
    },

    // Purpose & Hook Statement
    hookStatement: "Crafting thoughtful digital interfaces and advising high-growth product teams worldwide.",

    // Focus Chips / Tags
    focusPills: [
      "Product Strategy",
      "UI/UX Systems",
      "Creative Tech"
    ]
  },

  // 4. Quick Action Thumb Dock (Up to 4 dials)
  actions: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      type: "link",
      url: "https://wa.me/1234567890?text=Hi%20Alex,%20connected%20via%20your%20card",
      iconClass: "fa-brands fa-whatsapp",
      iconColorClass: "bg-emerald-500/15 text-emerald-400",
      target: "_blank"
    },
    {
      id: "call",
      label: "Call",
      type: "link",
      url: "tel:+1234567890",
      iconClass: "fa-solid fa-phone",
      iconColorClass: "bg-[var(--border-subtle)] text-[var(--text-primary)]",
      target: "_self"
    },
    {
      id: "email",
      label: "Email",
      type: "modal",
      modalId: "emailModal",
      iconClass: "fa-solid fa-envelope",
      iconColorClass: "bg-[var(--border-subtle)] text-[var(--text-primary)]"
    },
    {
      id: "qrcode",
      label: "QR Code",
      type: "modal",
      modalId: "qrModal",
      iconClass: "fa-solid fa-qrcode",
      iconColorClass: "bg-[var(--border-subtle)] text-[var(--text-primary)]"
    }
  ],

  // 5. Direct vCard (.vcf) Generator Settings
  vCard: {
    enabled: true,
    buttonText: "Save Contact to Phone",
    filename: "Alex_Rivera.vcf",
    firstName: "Alex",
    lastName: "Rivera",
    organization: "Studio Vanguard",
    title: "Design Director",
    phones: [
      { type: "CELL,type=VOICE;type=pref", number: "+1234567890" }
    ],
    emails: [
      { type: "INTERNET,type=pref", address: "alex@example.com" }
    ],
    urls: [
      { type: "WORK", url: "https://example.com" }
    ],
    socialProfiles: [
      { type: "linkedin", url: "https://linkedin.com/in/example" },
      { type: "github", url: "https://github.com/example" }
    ],
    note: "Design Director at Studio Vanguard"
  },

  // 6. Section Header & Featured Organization/Portfolio Links
  linksSection: {
    title: "Projects & Profiles",
    items: [
      {
        title: "Portfolio Website",
        subtitle: "alexrivera.design",
        type: "link",
        url: "https://example.com",
        target: "_blank",
        iconClass: "fa-solid fa-globe",
        iconColorStyle: "color: var(--accent-emerald);"
      },
      {
        title: "LinkedIn Profile",
        subtitle: "Connect on LinkedIn",
        type: "link",
        url: "https://linkedin.com",
        target: "_blank",
        iconClass: "fa-brands fa-linkedin-in",
        iconColorStyle: "color: #38bdf8;"
      },
      {
        title: "GitHub Repository",
        subtitle: "Open Source Works",
        type: "link",
        url: "https://github.com",
        target: "_blank",
        iconClass: "fa-brands fa-github",
        iconColorStyle: "color: var(--text-primary);"
      },
      {
        title: "Direct Email",
        subtitle: "alex@example.com",
        type: "modal",
        modalId: "emailModal",
        iconClass: "fa-solid fa-envelope",
        iconColorStyle: "color: var(--accent-gold);"
      }
    ]
  },

  // 7. Quick Copy Footer Strip
  quickCopyStrip: [
    {
      label: "Copy Email",
      value: "alex@example.com",
      iconClass: "fa-regular fa-copy",
      toastMessage: "Email copied!"
    },
    {
      label: "Copy Phone",
      value: "+1 234 567 890",
      iconClass: "fa-solid fa-phone",
      toastMessage: "Phone number copied!"
    },
    {
      label: "Copy Link",
      isCurrentUrl: true,
      iconClass: "fa-solid fa-link",
      toastMessage: "Card link copied!"
    }
  ],

  // 8. Email Compose Modal Settings
  emailModal: {
    title: "Send Email",
    email: "alex@example.com",
    gmailSubject: "Connecting via Digital Card"
  },

  // 9. QR Code Modal Info
  qrModal: {
    title: "Scan Contact",
    subtitle: "Point phone camera to open card",
    name: "Alex Rivera",
    organization: "Studio Vanguard"
  },

  // 10. Footer Text
  footer: {
    copyrightName: "Alex Rivera",
    tagline: "Tap to Connect"
  }
};
