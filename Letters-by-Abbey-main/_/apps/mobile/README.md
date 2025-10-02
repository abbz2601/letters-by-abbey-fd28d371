# Mobile App - CreateXYZ Project

A React Native mobile application built with Expo, featuring cross-platform compatibility for iOS, Android, and Web.

## 🚀 Tech Stack

- **React Native** 0.79.3 with **Expo SDK** 53
- **TypeScript** for type safety
- **Expo Router** for navigation
- **TanStack Query** for data fetching
- **Zustand** for state management
- **React Native Reanimated** for animations
- **Expo Secure Store** for secure token storage

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Expo CLI** (optional but recommended):
  ```bash
  npm install -g @expo/cli
  ```

For mobile development:
- **Expo Go** app on your mobile device
- Or **Android Studio** for Android emulator
- Or **Xcode** for iOS simulator (macOS only)

## 🛠️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```
   or if you have Expo CLI installed globally:
   ```bash
   expo start
   ```

3. **Choose your platform:**
   - Press `w` to open in web browser
   - Press `i` to open iOS simulator (macOS only)
   - Press `a` to open Android emulator
   - Scan QR code with Expo Go app on your mobile device

## 🏗️ Project Structure

```
src/
├── app/                 # App router pages
│   ├── _layout.jsx     # Root layout with navigation
│   └── index.jsx       # Home page
├── components/         # Reusable components
│   └── KeyboardAvoidingAnimatedView.jsx
├── utils/              # Utilities and hooks
│   └── auth/          # Authentication utilities
└── __create/          # Internal create.xyz files
```

## 🔧 Key Features

### Authentication System
- Secure JWT token storage using Expo Secure Store
- Web-based authentication flow with modal support
- Cross-platform compatibility

### Cross-Platform Support
- Web polyfills for React Native components
- Platform-specific adaptations
- Responsive design for different screen sizes

### Development Features
- Hot reload with error boundaries
- TypeScript support with strict mode
- Metro bundler with custom configuration
- Patch management for dependencies

## 🌐 Environment Variables

Create a `.env` file in the root directory with:

```env
EXPO_PUBLIC_PROJECT_GROUP_ID=your-project-group-id
EXPO_PUBLIC_HOST=your-host-url
EXPO_PUBLIC_PROXY_BASE_URL=your-proxy-base-url
EXPO_PUBLIC_BASE_URL=your-base-url
```

## 📱 Running on Different Platforms

### Web Development
```bash
npx expo start --web
```

### iOS Development (macOS only)
```bash
npx expo start --ios
```

### Android Development
```bash
npx expo start --android
```

## 🔍 Troubleshooting

### Common Issues

1. **Metro bundler cache issues:**
   ```bash
   npx expo start --clear
   ```

2. **Node modules issues:**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Patch package issues:**
   ```bash
   npx patch-package
   ```

### Development Tips

- Use `console.log` statements for debugging - they'll appear in the terminal
- The app includes error boundaries to catch and display errors
- Hot reload is enabled by default for faster development

## 📚 Available Scripts

- `npm run postinstall` - Apply patches to dependencies
- `npx expo start` - Start development server
- `npx expo build` - Build for production
- `npx expo doctor` - Check for common issues

## 🤝 Contributing

When making changes:
1. Follow TypeScript best practices
2. Test on multiple platforms when possible
3. Update this README if adding new features
4. Use the existing code patterns and architecture

## 📄 License

This project is part of the CreateXYZ platform.
