# Saumya Sindhu — Portfolio

A premium, production-ready personal portfolio built with the MERN stack. Dark theme, cinematic animations, AI Engineer focus.

---

## Tech Stack

**Frontend:** React (Vite) · Framer Motion · Tailwind CSS · Lucide Icons · React Router  
**Backend:** Node.js · Express.js · MongoDB · Nodemailer · JWT Auth  
**Dev Tools:** Vite · ESLint · dotenv

---

## Project Structure

```
portfolio/
├── portfolio-frontend/
│   ├── public/
│   │   └── resume.pdf          ← Place your resume here
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Achievements.jsx
│   │   │   │   ├── Education.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   └── Contact.jsx
│   │   │   └── ui/
│   │   │       ├── LoadingScreen.jsx
│   │   │       ├── ScrollProgress.jsx
│   │   │       └── SocialIcons.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── portfolio-backend/
    ├── src/
    │   ├── controllers/
    │   │   ├── contactController.js
    │   │   └── authController.js
    │   ├── models/
    │   │   ├── Contact.js
    │   │   └── Admin.js
    │   ├── routes/
    │   │   ├── contact.js
    │   │   ├── auth.js
    │   │   └── admin.js
    │   └── middleware/
    │       └── auth.js
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## Quick Start

### 1. Clone & Install

```bash
# Frontend
cd portfolio-frontend
npm install

# Backend
cd ../portfolio-backend
npm install
```

### 2. Add your resume

Place your resume PDF at:
```
portfolio-frontend/public/resume.pdf
```

### 3. Configure Backend Environment

```bash
cd portfolio-backend
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRES_IN=7d
EMAIL_USER=saumyasindhu75@gmail.com
EMAIL_PASS=your-gmail-app-password       # Use App Password, not regular password
FRONTEND_URL=http://localhost:5173
ADMIN_REGISTER_SECRET=your-admin-secret
```

> **Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail"

### 4. Run Development Servers

**Backend:**
```bash
cd portfolio-backend
npm install -g nodemon   # optional but recommended
npm run dev
# OR: node server.js
```

**Frontend:**
```bash
cd portfolio-frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Admin Dashboard Setup

### Register Admin (one-time)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "saumyasindhu75@gmail.com",
    "password": "yourSecurePassword",
    "secret": "your-admin-secret"
  }'
```

Save the returned `token`.

### View Contact Messages

```bash
curl http://localhost:5000/api/admin/messages \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Mark as Read

```bash
curl -X PATCH http://localhost:5000/api/admin/messages/MESSAGE_ID/read \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Delete Message

```bash
curl -X DELETE http://localhost:5000/api/admin/messages/MESSAGE_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Deployment

### Frontend → Vercel

```bash
cd portfolio-frontend
npm run build

# Deploy via Vercel CLI
npx vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) and set:
- **Framework:** Vite
- **Root directory:** `portfolio-frontend`
- **Build command:** `npm run build`
- **Output directory:** `dist`

### Backend → Railway / Render / Fly.io

**Railway:**
1. Create new project → Deploy from GitHub
2. Set root directory to `portfolio-backend`
3. Add environment variables from `.env`
4. Railway auto-detects Node.js and runs `npm start`

**Environment variables to set in production:**
```
MONGODB_URI=mongodb+srv://...  (MongoDB Atlas URI)
JWT_SECRET=...
EMAIL_USER=...
EMAIL_PASS=...
FRONTEND_URL=https://your-portfolio.vercel.app
ADMIN_REGISTER_SECRET=...
```

### MongoDB → Atlas (Production)

1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create database user with password
3. Whitelist IP: `0.0.0.0/0` (for Railway/Render)
4. Copy connection string → set as `MONGODB_URI`

---

## Customization

### Update personal info
Edit `src/components/sections/Hero.jsx` for name/bio/links.

### Add new projects
Edit the `projects` array in `src/components/sections/Projects.jsx`.

### Modify skills
Edit the `categories` array in `src/components/sections/Skills.jsx`.

### Change accent color
Edit `--accent` in `src/index.css`:
```css
--accent: #2F81F7;  /* Change to any hex color */
```

---

## API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/contact` | None | Submit contact form |
| POST | `/api/auth/login` | None | Admin login |
| POST | `/api/auth/register` | Secret | Register admin |
| GET | `/api/auth/me` | JWT | Get current admin |
| GET | `/api/admin/messages` | JWT | Get all messages |
| PATCH | `/api/admin/messages/:id/read` | JWT | Mark as read |
| DELETE | `/api/admin/messages/:id` | JWT | Delete message |
| GET | `/api/health` | None | Server health check |

---

## Features

- ✅ Dark glassmorphism design (Apple/Vercel/Linear inspired)
- ✅ Cinematic Framer Motion animations (scroll reveal, stagger, floating)
- ✅ Smooth loading screen with progress bar
- ✅ Scroll progress indicator
- ✅ 3D tilt card on Hero
- ✅ Responsive — mobile first
- ✅ SEO meta tags
- ✅ Contact form with validation + success animation
- ✅ Nodemailer email notifications (owner + auto-reply)
- ✅ JWT protected Admin API
- ✅ Rate limiting (global + contact endpoint)
- ✅ MongoDB contact storage
- ✅ Helmet security headers
- ✅ CORS configured
- ✅ Gzip compression
- ✅ Clean MVC architecture
- ✅ Centralized error handling

---

## License

MIT — free to use and modify for your own portfolio.
