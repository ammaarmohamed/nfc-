# Implementation Plan: Reusable Digital Business Card Template

Create an elegant, configuration-driven architecture for the digital business card so the exact design, interactions, themes, badges, and QR codes can be reused for any person, team member, or organization simply by editing a single configuration file (`card.config.js`).

---

## Architecture & Design Overview

```
                      ┌───────────────────────────┐
                      │      card.config.js       │
                      │  (All personal/org data,  │
                      │   links, themes, badges)  │
                      └─────────────┬─────────────┘
                                    │ (Loads into window.CARD_CONFIG)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                              index.html                                │
│                                                                        │
│  ┌─────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │   Template Core Shell   │  │        Dynamic Renderer             │  │
│  │  - Tailwind CSS + Fonts │  │  - Hero / Profile Header & Avatar   │  │
│  │  - 4 CSS Theme Palettes │  │  - Primary Role & Affiliation Badge │  │
│  │  - QR & Share Modals    │  │  - Quick Action Buttons (vCard/Call)│  │
│  │  - vCard Engine (.vcf)  │  │  - Featured Links & Social Badges   │  │
│  └─────────────────────────┘  └─────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Implementation Progress

- [x] **1. Create `card.config.js`**:
  - Full configuration containing Ammar Hussein's information, verified NFC badge, dual affiliation (Aamir Digital + MAMU with official crest), quick action thumb dock, RFC-compliant vCard generator data, featured links, and theme settings.
- [x] **2. Create `card.config.template.js`**:
  - Clean, commented starter configuration template with sample data ready to be duplicated for new individuals, team members, or clients.
- [x] **3. Create `README.md`**:
  - Quick-start guide (3 steps), theme palette breakdown, file structure, and 1-click free deployment instructions for GitHub Pages, Netlify, and Vercel.
- [x] **4. Refactor `index.html` for Dynamic Template Rendering**:
  - Automatically loads `card.config.js` and dynamically populates page metadata, avatar, dual roles, official affiliation crest badge, thumb action dials, Save Contact button, link cards, quick copy strip, email modal, and QR code modal.
  - Generates RFC-compliant `.vcf` vCards directly from `CFG.vCard`.
  - Preserves 4 custom CSS color palettes (`emerald`, `sapphire`, `amber`, `carbon`) and interactive theme selector modal.
- [x] **5. Verification & Testing**:
  - Verified compilation via `compile_applet`.
  - Verified TypeScript and code syntax via `lint_applet`.
