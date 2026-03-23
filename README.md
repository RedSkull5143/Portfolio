# Om Shinde — Portfolio

Personal portfolio website for Om Shinde, Automation Engineer.

Built with **Next.js 14 + TypeScript + TailwindCSS**, inspired by the design of Kashish Lalwani's portfolio.

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed ([https://nodejs.org](https://nodejs.org))
- npm or yarn

### Steps

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx         ← HTML head, metadata, fonts
│   │   ├── page.tsx           ← Entire portfolio (all sections)
│   │   └── globals.css        ← Global styles, animations, CSS variables
│   │
│   ├── public/
│   │   ├── images/
│   │   │   └── profile.jpg    ← Add your profile photo here
│   │   └── Om_Shinde_Resume.pdf  ← Add your resume PDF here
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   └── next.config.mjs
│
└── README.md
```

---

## 🖼️ Adding Your Profile Photo

Place your photo at:
```
frontend/public/images/profile.jpg
```

---

## 📄 Adding Your Resume PDF

Place your resume PDF at:
```
frontend/public/Om_Shinde_Resume.pdf
```

---

## 🏗️ Build for Production

```bash
cd frontend
npm run build
npm start
```

---

## 🌐 Deploy to Vercel (Free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Set **Root Directory** to `frontend`
5. Click Deploy ✅

---

## ✏️ Customize Content

All portfolio data is in `frontend/app/page.tsx` at the top in the **DATA** section:
- `STATS` — hero stat numbers
- `EXPERIENCES` — work history
- `PROJECTS` — project cards
- `SKILLS` — skill categories
- `AWARDS` — awards list

Just edit those arrays and the site updates instantly.
