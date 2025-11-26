# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd mintube-app
npm install
```

### Step 2: Configure Firebase (Optional)
If you want to use Firebase features, update `src/environments/environment.ts` with your Firebase credentials.

For now, the app works with the JSON data file in `src/assets/data.json`.

### Step 3: Start Development Server
```bash
npm start
```

### Step 4: Open Browser
Navigate to `http://localhost:4200`

## 📋 What's Included

✅ **5 Pages:**
- Home (`/`) - Video grid with search
- Video (`/video/:id`) - Video player with comments
- Upload (`/upload`) - Upload form
- About (`/about`) - About page
- Profile (`/profile`) - User profile

✅ **Components:**
- Navbar with search
- Footer
- Button (shadcn-style)
- Card (shadcn-style)
- Modal (shadcn-style)

✅ **Features:**
- Angular 18 with standalone components
- Tailwind CSS configured
- Firebase integration ready
- TypeScript
- Responsive design
- Routing

## 🔧 Troubleshooting

### Port Already in Use
If port 4200 is busy:
```bash
ng serve --port 4201
```

### Module Not Found Errors
```bash
npm install
```

### Build Errors
Make sure you have Node.js 18+ and npm 9+ installed.

## 📚 Next Steps

1. **Configure Firebase** - Add your Firebase credentials
2. **Customize Styling** - Modify Tailwind config
3. **Add Features** - Extend components and services
4. **Deploy** - Build and deploy to your preferred platform

## 🎯 Project Structure

```
src/
├── app/
│   ├── components/     # Navbar, Footer
│   ├── pages/          # Home, Video, Upload, About, Profile
│   ├── services/       # VideoService
│   └── shared/         # Utilities & UI components
├── assets/             # Images, data.json
└── environments/       # Firebase config
```

Happy coding! 🎉

