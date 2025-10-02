# Setup Script for CreateXYZ Project
# Run this script after installing Node.js

Write-Host "🚀 CreateXYZ Project Setup Script" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green

# Check if Node.js is installed
Write-Host "`n📋 Checking prerequisites..." -ForegroundColor Yellow

try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    Write-Host "After installing Node.js, restart PowerShell and run this script again." -ForegroundColor Red
    exit 1
}

try {
    $npmVersion = npm --version  
    Write-Host "✅ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found! Please reinstall Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Set up Web App
Write-Host "`n🌐 Setting up Web App..." -ForegroundColor Yellow
Set-Location "apps\web"

# Check for environment file
if (!(Test-Path ".env")) {
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "✅ Created .env file from template" -ForegroundColor Green
        Write-Host "⚠️  Please edit .env file with your actual values!" -ForegroundColor Red
    } else {
        Write-Host "❌ .env.example not found!" -ForegroundColor Red
    }
}

# Try to install dependencies with available package manager
if (Get-Command bun -ErrorAction SilentlyContinue) {
    Write-Host "📦 Installing web app dependencies with Bun..." -ForegroundColor Blue
    bun install
} else {
    Write-Host "📦 Installing web app dependencies with npm..." -ForegroundColor Blue
    npm install
}

# Set up Mobile App  
Write-Host "`n📱 Setting up Mobile App..." -ForegroundColor Yellow
Set-Location "..\mobile"

# Check for environment file
if (!(Test-Path ".env")) {
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "✅ Created .env file from template" -ForegroundColor Green
        Write-Host "⚠️  Please edit .env file with your actual values!" -ForegroundColor Red
    } else {
        Write-Host "❌ .env.example not found!" -ForegroundColor Red
    }
}

Write-Host "📦 Installing mobile app dependencies with npm..." -ForegroundColor Blue
npm install

# Install Expo CLI if not present
try {
    $expoVersion = npx expo --version
    Write-Host "✅ Expo CLI found: $expoVersion" -ForegroundColor Green
} catch {
    Write-Host "📦 Installing Expo CLI globally..." -ForegroundColor Blue
    npm install -g @expo/cli
}

# Return to root
Set-Location "..\..\"

Write-Host "`n🎉 Setup Complete!" -ForegroundColor Green
Write-Host "==================" -ForegroundColor Green

Write-Host "`n📝 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Edit the .env files in both apps with your actual values"
Write-Host "2. Start the web app: cd apps\web && npm run dev (or bun run dev)"
Write-Host "3. Start the mobile app: cd apps\mobile && npx expo start"
Write-Host "4. Open http://localhost:3000 for web app"
Write-Host "5. Scan QR code or use simulator for mobile app"

Write-Host "`n⚠️  Important:" -ForegroundColor Red
Write-Host "- Set up your Neon database and update DATABASE_URL in web/.env"
Write-Host "- Generate a secure AUTH_SECRET (32+ characters) in web/.env"
Write-Host "- Update EXPO_PUBLIC_* variables in mobile/.env"

Write-Host "`n📚 Documentation:" -ForegroundColor Cyan
Write-Host "- Main README: README.md"
Write-Host "- Web App: apps\web\README.md"
Write-Host "- Mobile App: apps\mobile\README.md"