# CreateXYZ Full-Stack Project

A modern full-stack application featuring a React Native mobile app and React web app with shared authentication and state management.

## 📱 Project Overview

This is a monorepo containing:
- **Mobile App** (`apps/mobile/`) - React Native with Expo
- **Web App** (`apps/web/`) - React with Vite and Hono server

Both applications share:
- Authentication system with JWT tokens
- Database integration (Neon PostgreSQL)
- TypeScript configuration
- Modern development tooling

## 🚀 Quick Start

### Prerequisites

1. **Install Node.js** (v18 or higher):
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install Bun** (recommended for web app):
   ```bash
   # Windows
   powershell -c "irm bun.sh/install.ps1 | iex"
   
   # macOS/Linux
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Install Expo CLI** (for mobile app):
   ```bash
   npm install -g @expo/cli
   ```

### Setup Instructions

1. **Clone and navigate to project:**
   ```bash
   cd createxyz-project/_
   ```

2. **Set up the Web App:**
   ```bash
   cd apps/web
   bun install          # or npm install
   
   # Create environment file
   cp .env.example .env # Edit with your values
   
   bun run dev         # Start development server
   ```

3. **Set up the Mobile App:**
   ```bash
   cd ../mobile
   npm install
   
   # Create environment file  
   cp .env.example .env # Edit with your values
   
   npx expo start      # Start Expo development server
   ```

## 🏗️ Project Structure

```
_/
├── apps/
│   ├── mobile/              # React Native app
│   │   ├── src/            # Source code
│   │   ├── App.tsx         # Root component
│   │   ├── package.json    # Dependencies
│   │   └── README.md       # Mobile app docs
│   └── web/                # React web app
│       ├── src/           # Source code
│       ├── vite.config.ts # Build config
│       ├── package.json   # Dependencies
│       └── README.md      # Web app docs
└── README.md              # This file
```

## 🔧 Environment Configuration

### Web App (.env)
```env
DATABASE_URL=your-neon-database-url
AUTH_SECRET=your-32-character-secret
AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Mobile App (.env)
```env
EXPO_PUBLIC_PROJECT_GROUP_ID=your-project-id
EXPO_PUBLIC_HOST=localhost:3000
EXPO_PUBLIC_PROXY_BASE_URL=http://localhost:3000
EXPO_PUBLIC_BASE_URL=http://localhost:3000
```

## 🛠️ Development Workflow

### Start Both Apps
```bash
# Terminal 1 - Web App
cd apps/web
bun run dev

# Terminal 2 - Mobile App  
cd apps/mobile
npx expo start
```

### Available Commands

**Web App:**
- `bun run dev` - Start development server
- `bun run typecheck` - Type checking
- `bun run build` - Build for production

**Mobile App:**
- `npx expo start` - Start Expo server
- `npx expo start --web` - Web version
- `npx expo start --clear` - Clear cache

## 🔍 Technology Stack

### Shared Technologies
- **TypeScript** - Type safety
- **TanStack Query** - Data fetching
- **Zustand** - State management
- **Auth.js** - Authentication

### Mobile App
- **React Native** 0.79.3
- **Expo SDK** 53
- **Expo Router** - Navigation
- **React Native Reanimated** - Animations

### Web App
- **React** 18
- **React Router** v7
- **Vite** 6 - Build tool
- **Hono** - Server framework
- **Tailwind CSS** - Styling
- **Neon Database** - PostgreSQL

## 🔐 Authentication Flow

1. **Web App** handles authentication via Auth.js
2. **Mobile App** opens web authentication in WebView/iframe
3. **JWT tokens** are shared between platforms
4. **Secure storage** on mobile via Expo Secure Store

## 🌐 Cross-Platform Features

- **Shared API endpoints** between mobile and web
- **Consistent authentication** across platforms
- **Responsive design** adapts to different screen sizes
- **Web polyfills** for React Native components

## 🚀 Deployment

### Web App Deployment
1. Build: `bun run build`
2. Deploy to hosting service (Vercel, Netlify, etc.)
3. Set environment variables in production

### Mobile App Deployment
1. Build: `npx expo build`
2. Deploy to app stores using EAS Build
3. Configure environment for production

## 🐛 Troubleshooting

### Node.js Not Found
If you get "node is not recognized":
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your terminal after installation
3. Verify with `node --version`

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Or for web app
rm -rf node_modules bun.lockb
bun install
```

## 📚 Documentation

- **Mobile App**: See `apps/mobile/README.md`
- **Web App**: See `apps/web/README.md`
- **API Documentation**: Available in source code comments

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review individual app README files
3. Check the GitHub issues
4. Contact the development team

## 📄 License

This project is part of the CreateXYZ platform.