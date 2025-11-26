# MiniTube - Angular + Firebase + Tailwind CSS

A modern video platform built with Angular, Firebase, and Tailwind CSS, featuring shadcn-style UI components.

## 🚀 Tech Stack

- **Angular 18** - Modern frontend framework
- **Firebase** - Backend services (Firestore, Auth, Storage)
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **AngularFire** - Official Angular library for Firebase

## 📁 Project Structure

```
mintube-app/
├── src/
│   ├── app/
│   │   ├── components/        # Shared components (Navbar, Footer)
│   │   ├── pages/             # Page components (Home, Video, Upload, etc.)
│   │   ├── services/          # Data services
│   │   ├── shared/            # Shared utilities and components
│   │   ├── app.component.ts   # Root component
│   │   └── app.routes.ts      # Routing configuration
│   ├── assets/                # Static assets (images, data.json)
│   ├── environments/          # Environment configurations
│   ├── styles.css             # Global styles with Tailwind
│   └── main.ts                # Application entry point
├── angular.json               # Angular CLI configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v18 or higher)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd mintube-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Get your Firebase configuration
   - Update `src/environments/environment.ts` with your Firebase config:
     ```typescript
     export const environment = {
       production: false,
       firebase: {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
       }
     };
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:4200`

## 📦 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## 🎨 Features

### Pages
- **Home** - Video grid with search functionality
- **Video** - Video player with comments and likes
- **Upload** - Video upload form with validation
- **About** - Platform information
- **Profile** - User profile with uploaded videos

### Components
- **Navbar** - Navigation with search
- **Footer** - Site footer
- **Button** - Reusable button component (shadcn-style)
- **Card** - Card component (shadcn-style)
- **Modal** - Modal dialog component (shadcn-style)

### Services
- **VideoService** - Handles video data operations
- Firebase integration ready for:
  - Authentication
  - Firestore database
  - Storage for videos

## 🔥 Firebase Integration

The project is configured to use Firebase for:
- **Authentication** - User login/signup
- **Firestore** - Database for videos, comments, users
- **Storage** - Video and thumbnail storage

To enable Firebase features:
1. Update environment files with your Firebase config
2. Uncomment Firebase providers in `main.ts`
3. Implement Firebase services in your components

## 🎯 Development

### Adding New Components

```bash
ng generate component components/my-component
```

### Adding New Services

```bash
ng generate service services/my-service
```

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📝 Notes

- The project uses standalone components (no NgModules)
- Tailwind CSS is configured and ready to use
- Firebase is set up but requires configuration
- All components are responsive and mobile-friendly

## 🚀 Deployment

### Firebase Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```

### Other Platforms

The built files in `dist/mintube-app/` can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

This project is created for educational purposes.

## 👤 Author

Ahmed Abdelhalim

