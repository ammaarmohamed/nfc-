/**
 * ====================================================================
 * DIGITAL BUSINESS CARD CONFIGURATION
 * ====================================================================
 * Customize this single file to personalize the digital business card
 * for any individual, executive, or organization.
 * 
 * Simply edit the values below — no HTML or CSS edits required!
 */

window.CARD_CONFIG = {
  // 1. Page Metadata & SEO
  meta: {
    title: "Ammar Hussein - Digital Business Card",
    description: "Technical Lead at Aamir Digital | Organizing Secretary, Muslim Association of Meru University. Tap to connect and save contact.",
    ogImage: "/assets/aistudio/avatar_opt.jpg",
    themeColor: "#06130e"
  },

  // 2. Color Theme Configuration
  // Options: 'emerald' (Emerald & Gold) | 'sapphire' (Midnight Sapphire) | 'amber' (Warm Amber & Gold) | 'carbon' (Stealth Carbon)
  theme: {
    defaultTheme: "emerald",
    allowThemeSwitcher: true,
    storageKey: "ammar_card_theme"
  },

  // 3. Profile Information
  profile: {
    name: "Ammar Hussein",
    initials: "AH",
    avatar: "/assets/aistudio/avatar_opt.webp",
    avatarFallback: "/assets/aistudio/avatar_opt.jpg",
    verified: true,
    
    // Status pill shown at top left
    statusPill: {
      enabled: true,
      text: "NFC Tap Verified"
    },

    // Primary & Secondary Dual Affiliations
    primaryRole: {
      title: "Technical Lead",
      company: "Aamir Digital"
    },
    
    secondaryAffiliation: {
      enabled: true,
      title: "Organizing Secretary",
      organization: "Muslim Association of Meru University",
      shortOrg: "MAMU",
      logo: "/assets/aistudio/logo_opt.webp",
      logoFallback: "/assets/aistudio/logo_opt.png",
      url: "https://mamu36673.github.io/MamuWeb/"
    },

    // Purpose & Hook Statement
    hookStatement: "Architecting high-scale digital solutions & driving transformative community leadership across Meru and East Africa.",

    // Focus Chips / Tags
    focusPills: [
      "Full-Stack Tech",
      "Digital Systems",
      "Youth Empowerment"
    ]
  },

  // 4. Quick Action Thumb Dock (Up to 4 quick action dials)
  actions: [
    {
      id: "whatsapp",
      label: "WhatsApp",
      type: "link",
      url: "https://wa.me/254759980031?text=Hi%20Ammar,%20connected%20via%20your%20digital%20card",
      iconClass: "fa-brands fa-whatsapp",
      iconColorClass: "bg-emerald-500/15 text-emerald-400",
      target: "_blank"
    },
    {
      id: "call",
      label: "Call Airtel",
      type: "link",
      url: "tel:+254105841028",
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
    filename: "Ammar_Hussein.vcf",
    firstName: "Ammar",
    lastName: "Hussein",
    organization: "Aamir Digital;Muslim Association of Meru University (MAMU)",
    title: "Technical Lead, Aamir Digital | Organizing Secretary, MAMU",
    phones: [
      { type: "CELL,type=VOICE;type=pref", number: "+254759980031" },
      { type: "WORK,type=VOICE", number: "+254105841028" }
    ],
    emails: [
      { type: "INTERNET,type=pref", address: "ammaarmohamed93@gmail.com" }
    ],
    urls: [
      { type: "WORK", url: "https://aamirdigital.netlify.app/" },
      { type: "MAMU", url: "https://mamu36673.github.io/MamuWeb/" }
    ],
    socialProfiles: [
      { type: "instagram", url: "https://instagram.com/amaril1o_" },
      { type: "mamu-instagram", url: "https://instagram.com/muslimassociation.mamu" },
      { type: "github", url: "https://github.com/ammaarmohamed" }
    ],
    note: "Technical Lead at Aamir Digital | Organizing Secretary, Muslim Association of Meru University (MAMU)\nWhatsApp: +254759980031 | Airtel: +254105841028"
  },

  // 6. Section Header & Featured Organization/Portfolio Links
  linksSection: {
    title: "Organizations & Platforms",
    items: [
      {
        title: "Aamir Digital Website",
        subtitle: "aamirdigital.netlify.app",
        type: "link",
        url: "https://aamirdigital.netlify.app/",
        target: "_blank",
        iconClass: "fa-solid fa-globe",
        iconColorStyle: "color: var(--accent-emerald);"
      },
      {
        title: "Muslim Association of Meru University",
        subtitle: "Official Website · mamu36673.github.io",
        type: "link",
        url: "https://mamu36673.github.io/MamuWeb/",
        target: "_blank",
        logo: "/assets/aistudio/logo_opt.webp",
        logoFallback: "/assets/aistudio/logo_opt.png"
      },
      {
        title: "Muslim Association Instagram",
        subtitle: "@muslimassociation.mamu",
        type: "link",
        url: "https://instagram.com/muslimassociation.mamu",
        target: "_blank",
        logo: "/assets/aistudio/logo_opt.webp",
        logoFallback: "/assets/aistudio/logo_opt.png",
        badgeIcon: "fa-brands fa-instagram"
      },
      {
        title: "Personal Instagram",
        subtitle: "@amaril1o_",
        type: "link",
        url: "https://instagram.com/amaril1o_",
        target: "_blank",
        iconClass: "fa-brands fa-instagram",
        iconColorStyle: "color: #f472b6;"
      },
      {
        title: "GitHub Repository",
        subtitle: "@ammaarmohamed · Open Source",
        type: "link",
        url: "https://github.com/ammaarmohamed",
        target: "_blank",
        iconClass: "fa-brands fa-github",
        iconColorStyle: "color: var(--text-primary);"
      },
      {
        title: "Direct Email",
        subtitle: "ammaarmohamed93@gmail.com",
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
      value: "ammaarmohamed93@gmail.com",
      iconClass: "fa-regular fa-copy",
      toastMessage: "Email copied!"
    },
    {
      label: "Copy Phone",
      value: "0759980031",
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
    email: "ammaarmohamed93@gmail.com",
    gmailSubject: "Connecting via Digital Card"
  },

  // 9. QR Code Modal Info
  qrModal: {
    title: "Scan Contact",
    subtitle: "Point phone camera to open card",
    name: "Ammar Hussein",
    organization: "Muslim Association of Meru Univ.",
    logo: "/assets/aistudio/logo_opt.webp",
    logoFallback: "/assets/aistudio/logo_opt.png"
  },

  // 10. Footer Text
  footer: {
    copyrightName: "Ammar Hussein",
    tagline: "Tap to Connect"
  }
};
