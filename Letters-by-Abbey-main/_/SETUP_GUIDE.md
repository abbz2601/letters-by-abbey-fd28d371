# Project Health Check & Setup Verification

This document outlines how to verify that your CreateXYZ project is properly set up and functioning.

## 🔍 Pre-Setup Verification

### 1. Node.js Installation
```powershell
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# If not installed, download from: https://nodejs.org/
```

### 2. Optional: Bun Installation (for web app)
```powershell
# Check if Bun is installed
bun --version

# Install Bun (recommended for web app)
powershell -c "irm bun.sh/install.ps1 | iex"
```

## 🚀 Setup Process

### Option A: Automated Setup (Recommended)
```powershell
# Run the setup script
.\setup.ps1

# If execution policy blocks the script:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\setup.ps1
```

### Option B: Manual Setup

#### Web App Setup
```powershell
cd apps\web

# Copy environment template
copy .env.example .env
# Edit .env with your values!

# Install dependencies (choose one)
bun install        # Recommended
# OR
npm install

# Start development server
bun run dev        # or npm run dev
```

#### Mobile App Setup
```powershell
cd apps\mobile

# Copy environment template  
copy .env.example .env
# Edit .env with your values!

# Install dependencies
npm install

# Install Expo CLI (if needed)
npm install -g @expo/cli

# Start development server
npx expo start
```

## ✅ Verification Steps

### 1. Environment Files
Check that these files exist and are configured:
- `apps/web/.env` - Web app environment variables
- `apps/mobile/.env` - Mobile app environment variables

### 2. Dependencies Installation
Verify node_modules directories exist:
- `apps/web/node_modules/` 
- `apps/mobile/node_modules/`

### 3. TypeScript Compilation
```powershell
# Web app type checking
cd apps\web
npm run typecheck     # or bun run typecheck

# Mobile app type checking (will run automatically with Expo)
cd apps\mobile
npx expo start --no-dev-client
```

### 4. Application Startup

#### Web App
```powershell
cd apps\web
npm run dev          # or bun run dev
```
Expected output:
- Server starts on http://localhost:3000
- No TypeScript errors
- Database connection (if configured)

#### Mobile App
```powershell
cd apps\mobile
npx expo start
```
Expected output:
- Metro bundler starts
- QR code displayed
- No compilation errors

## 🔧 Common Issues & Solutions

### "node is not recognized"
**Problem**: Node.js not installed or not in PATH
**Solution**: 
1. Download Node.js from https://nodejs.org/
2. Restart PowerShell after installation
3. Verify with `node --version`

### "bun is not recognized" 
**Problem**: Bun not installed
**Solution**: Install Bun with:
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Metro bundler cache issues
**Problem**: Expo showing old code or errors
**Solution**:
```powershell
cd apps\mobile
npx expo start --clear
```

### Package installation failures
**Problem**: npm install fails
**Solution**:
```powershell
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment variable issues
**Problem**: App can't connect to database/services
**Solution**:
1. Verify .env files exist
2. Check all required variables are set
3. Restart development servers after .env changes

## 🎯 Success Criteria

Your project is properly set up when:

✅ **Web App (http://localhost:3000)**:
- Page loads without errors
- No console errors in browser dev tools
- TypeScript compilation passes
- Authentication flow works (if database configured)

✅ **Mobile App**:
- Expo development server starts successfully
- App loads in web browser (press 'w' in terminal)
- App loads on device/simulator
- No compilation errors in Metro bundler

✅ **Both Apps**:
- Hot reload works (changes reflect immediately)
- No TypeScript errors
- Environment variables are loaded
- Authentication system functional (when configured)

## 📊 Health Monitoring

### Development Commands
```powershell
# Check web app health
cd apps\web
npm run typecheck
npm run build        # Test production build

# Check mobile app health  
cd apps\mobile
npx expo doctor      # Diagnose common issues
```

### Log Monitoring
- **Web App**: Check browser console and terminal output
- **Mobile App**: Check Metro bundler terminal output
- **Database**: Check connection in web app logs

## 🆘 Getting Help

If you encounter issues:

1. **Check the logs**: Look for error messages in terminals
2. **Review documentation**: Check individual app README files
3. **Clear caches**: Use `--clear` flags with development commands
4. **Restart services**: Stop and restart development servers
5. **Check environment**: Verify all .env variables are set correctly

## 📈 Performance Tips

- Use Bun instead of npm for faster web app builds
- Enable Metro bundler cache for faster mobile builds
- Use TypeScript strict mode for better code quality
- Monitor bundle sizes in production builds