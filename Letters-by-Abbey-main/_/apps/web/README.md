# Web App - CreateXYZ Project

A modern React web application built with React Router, Vite, and Hono server, featuring server-side rendering and authentication.

## 🚀 Tech Stack

- **React** 18 with **React Router** v7
- **Vite** 6 for build tooling
- **TypeScript** for type safety
- **Hono** server for backend API
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **Neon Database** with PostgreSQL
- **Auth.js** for authentication

## 📋 Prerequisites

Before running this application, you need:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Bun** (recommended) or **npm** - [Install Bun](https://bun.sh/)

For the database:
- **Neon Database** account or PostgreSQL instance
- Database connection string

## 🛠️ Setup Instructions

1. **Install dependencies:**
   
   Using Bun (recommended):
   ```bash
   bun install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

2. **Environment Setup:**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your-neon-database-connection-string
   AUTH_SECRET=your-auth-secret-key
   AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```
   or
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/                    # React Router app directory
│   ├── root.tsx           # Root component with providers
│   ├── layout.jsx         # Main layout
│   ├── page.jsx          # Home page
│   ├── about/            # About page
│   ├── shop/             # Shop pages
│   ├── cart/             # Cart functionality
│   ├── checkout/         # Checkout flow
│   ├── contact/          # Contact page
│   ├── api/              # API routes
│   └── __create/         # Internal create.xyz files
├── components/           # Reusable React components
│   ├── Header.jsx       # Site header
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Hero section
│   └── Collection/      # Collection components
├── utils/               # Utility functions
├── client-integrations/ # Third-party integrations
└── __create/           # Build and development utilities
```

## 🔧 Key Features

### Server-Side Rendering (SSR)
- React Router v7 with SSR support
- Hono server for fast API routes
- Pre-rendering for better SEO

### Authentication System
- Auth.js integration with credentials provider
- Secure JWT tokens
- Database session management
- Protected routes

### Database Integration
- Neon PostgreSQL database
- Custom database adapter
- User and session management
- Secure password hashing with Argon2

### Styling System
- Tailwind CSS with extensive font library
- Responsive design patterns
- Custom CSS variables
- Component-based styling

## 🌐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Authentication
AUTH_SECRET=your-secret-key-min-32-characters
AUTH_URL=http://localhost:3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Optional: External service URLs
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 📚 Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run typecheck    # Run TypeScript type checking

# Build
bun run build        # Build for production
bun run start        # Start production server

# Testing
bun run test         # Run tests
bun run test:ui      # Run tests with UI
```

## 🔍 API Routes

The application includes several API endpoints:

- `GET /api/auth/token` - Get authentication token
- `POST /api/auth/*` - Authentication handlers
- Custom API routes in `src/app/api/`

## 🗄️ Database Schema

The application uses these main tables:

- `auth_users` - User accounts
- `auth_accounts` - OAuth provider accounts
- `auth_sessions` - User sessions
- `auth_verification_tokens` - Email verification

## 🔍 Development Tips

### Hot Reload
- Changes to files automatically trigger rebuilds
- Environment file changes restart the server
- Error boundaries provide helpful debugging info

### TypeScript
- Strict mode enabled for better type safety
- Custom type declarations in `global.d.ts`
- React Router type generation

### Debugging
- Console logs include trace IDs for request tracking
- Error serialization for better error reporting
- Development error pages with stack traces

## 🚀 Deployment

1. **Build the application:**
   ```bash
   bun run build
   ```

2. **Environment setup:**
   - Set production environment variables
   - Ensure database is accessible
   - Configure AUTH_URL for production domain

3. **Start production server:**
   ```bash
   bun run start
   ```

## 🔐 Security Features

- CSRF protection
- Secure cookie handling
- Password hashing with Argon2
- JWT token validation
- Database query parameterization

## 🤝 Contributing

Development guidelines:

1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Implement proper error handling
4. Add tests for new features
5. Update this README for significant changes

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Database connection issues:**
   - Verify DATABASE_URL is correct
   - Check database is accessible
   - Ensure database schema is up to date

3. **Build errors:**
   ```bash
   rm -rf node_modules bun.lockb
   bun install
   ```

4. **Type errors:**
   ```bash
   bun run typecheck
   ```

## 📄 License

This project is part of the CreateXYZ platform.