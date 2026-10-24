# Digital Business Card & Bio-Link Template

A sleek, high-performance, mobile-optimized digital business card and bio-link webpage. Built with clean HTML5, Tailwind CSS, FontAwesome, dynamic theme palettes, QR code generator, and native vCard phone contact export.

---

## ⚡ Quick Start (3 Steps)

1. **Clone or Copy** this repository.
2. **Open `card.config.js`** in any text editor.
3. **Fill in your details**:
   - Change your name, photo, and title.
   - Set phone numbers, WhatsApp, and email addresses.
   - Add your websites, social media links, and organization crests.
   - Choose your default color palette (`emerald`, `sapphire`, `amber`, or `carbon`).

**That's it!** Open `index.html` in any web browser or deploy it immediately to any web host.

---

## 🎨 Built-in Color Themes

You can set your default theme in `card.config.js` (`theme.defaultTheme`):

| Theme ID | Palette Name | Aesthetic |
| :--- | :--- | :--- |
| `emerald` | **Emerald & Gold** | Heritage Executive, organization prestige, nature |
| `sapphire` | **Midnight Sapphire** | Deep tech, software engineering, modern fintech |
| `amber` | **Warm Amber & Bronze** | Founder luxury, warm editorial, distinguished |
| `carbon` | **Stealth Carbon** | Minimalist monochrome, sleek dark studio |

Users viewing the card can also tap the **"Theme"** button in the top action bar to interactively switch palettes.

---

## 🚀 Key Features

- **Zero-Code Customization**: Everything is controlled via `card.config.js` — no need to touch HTML or CSS.
- **One-Tap "Save Contact" (.vcf)**: Generates an RFC-compliant vCard that directly imports full names, phone numbers, WhatsApp lines, emails, organizations, and social profiles into Apple Contacts, Google Contacts, or Android.
- **Dynamic QR Code Modal**: Generates a high-contrast QR code pointing to the live card URL with brand logo overlay for in-person networking.
- **Multi-Email Picker**: Modal dialog offering direct Gmail Web compose or 1-tap clipboard copy.
- **Native Web Share**: Uses the mobile device's native share sheet (AirDrop, Messages, WhatsApp, etc.) with automatic clipboard fallback.
- **Quick-Dial Thumb Dock**: Fast access to WhatsApp chat, direct phone dial, email compose, and QR code.
- **Executive Organization Badge**: Display institutional affiliations with high-res emblems or seals (e.g. university, company, NGO).

---

## 📁 File Structure

```text
├── public/                 # Static assets copied to dist during build
│   ├── card.config.js      # Card configuration (Loaded by web app)
│   ├── card.config.template.js # Blank starter template for new profiles
│   ├── sw.js               # Service Worker for offline / fast cache
│   └── assets/             # Profile photos, organization crests
├── card.config.js          # Root mirror of card configuration
├── index.html              # The core rendering engine, themes, modals & UI
├── netlify.toml            # Pre-configured Netlify build & header settings
└── README.md               # Documentation and guides
```

---

## 🌐 Free 1-Click Deployment

Because this template is completely static, it can be hosted for free anywhere:

### GitHub Pages
1. Push your repository to GitHub.
2. Go to **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your card is live at `https://<username>.github.io/<repo-name>/`.

### Netlify
- **Automatic (Recommended)**: Netlify automatically reads the included `netlify.toml`.
  - Build command: `npm run build`
  - Publish directory: `dist`
- **Manual / Netlify Drop**: If dragging and dropping or deploying without build tools, upload the `dist` folder after running `npm run build`, or edit `public/card.config.js`.

### Vercel
1. Import the Git repository in Vercel.
2. Framework Preset: **Other**.
3. Root Directory: `./`. Click **Deploy**.

---

## 👥 Creating Multiple Cards / Team Members

To create cards for other team members or organizations:
1. Make a copy of `card.config.template.js`.
2. Save it as `card.config.js`.
3. Add the member's photo to `/public/assets/` and update the links.
4. Deploy to a new subdomain (e.g. `ammar.yourdomain.com`, `sarah.yourdomain.com`).
