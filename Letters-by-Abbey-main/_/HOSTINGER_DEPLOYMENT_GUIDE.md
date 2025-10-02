# Hostinger Deployment Guide for Letters by Abbey

This guide will help you deploy your Letters by Abbey website to Hostinger using Create.xyz.

## Prerequisites

1. **Hostinger Account** with Node.js hosting support
2. **Shopify Store** with Storefront API access
3. **Neon Database** (PostgreSQL) 
4. **Domain** configured with Hostinger
5. **Create.xyz Account** for deployment automation

## Step 1: Environment Variables Setup

### 1.1 Database Configuration
1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new database or use existing one
3. Copy the connection string
4. Format: `postgresql://username:password@ep-xxxxx.region.aws.neon.tech/dbname?sslmode=require`

### 1.2 Shopify Configuration
1. Go to your Shopify Admin Dashboard
2. Navigate to: **Settings > Apps and sales channels > Develop apps**
3. Click **Create an app**
4. Configure **Storefront API** permissions:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collection_listings`
   - `unauthenticated_read_checkouts`
5. Generate **Storefront access token**
6. Note your store domain: `your-store.myshopify.com`

### 1.3 Authentication Secret
1. Generate a secure 32+ character secret at: https://generate-secret.vercel.app/32
2. Save this for the `AUTH_SECRET` variable

## Step 2: Hostinger Configuration

### 2.1 File Upload
1. Upload all files from `apps/web/` to your Hostinger public_html directory
2. Ensure `package.json` is in the root
3. Upload `.env.production` as `.env`

### 2.2 Environment Variables in Hostinger
Access your hosting control panel and set these environment variables:

```bash
# Database
DATABASE_URL=postgresql://your-neon-connection-string

# Domain Configuration  
AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Authentication
AUTH_SECRET=your-32-character-secret-here

# Shopify Integration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-token

# Email Marketing (ConvertKit)
CONVERTKIT_API_KEY=your-convertkit-api-key
CONVERTKIT_FORM_ID=5540fe4df6

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-96FCD7QMB1

# Production Settings
NODE_ENV=production
NODE_VERSION=20
```

### 2.3 Build Configuration
Create a `package.json` in your root directory with:

```json
{
  "name": "letters-by-abbey",
  "scripts": {
    "build": "npm install && npm run build:web",
    "build:web": "cd apps/web && npm install && npm run build",
    "start": "cd apps/web && npm start"
  },
  "engines": {
    "node": ">=20.0.0"
  }
}
```

## Step 3: Database Setup

### 3.1 Create Database Tables
Connect to your Neon database and run:

```sql
-- Collections table
CREATE TABLE IF NOT EXISTS collections (
  id SERIAL PRIMARY KEY,
  handle VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table (for authentication)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Accounts table (for Auth.js)
CREATE TABLE IF NOT EXISTS accounts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(255) NOT NULL,
  provider_account_id VARCHAR(255),
  password VARCHAR(255), -- for credentials provider
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample collections (optional)
INSERT INTO collections (handle, title, description, is_featured, sort_order) VALUES
('romantic-letters', 'Romantic Letters', 'Beautiful handwritten romantic letters', true, 1),
('thank-you-notes', 'Thank You Notes', 'Elegant thank you notes', true, 2),
('birthday-wishes', 'Birthday Wishes', 'Special birthday letter wishes', false, 3)
ON CONFLICT (handle) DO NOTHING;
```

## Step 4: DNS Configuration

### 4.1 Point Domain to Hostinger
1. In your domain registrar, set nameservers to Hostinger's:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`

### 4.2 SSL Certificate
1. In Hostinger control panel, enable SSL certificate
2. Force HTTPS redirect

## Step 5: Testing

### 5.1 Pre-deployment Test
Run locally with production environment:
```bash
cd apps/web
cp .env.production .env
npm run build
npm start
```

### 5.2 Post-deployment Test
1. Visit your domain
2. Test key functionality:
   - Homepage loads
   - Shop page shows collections
   - Contact form works
   - Email signup works
   - Google Analytics tracking

## Step 6: Create.xyz Integration (Optional)

### 6.1 Connect Repository
1. Link your GitHub repository to Create.xyz
2. Configure automatic deployments
3. Set up webhook for push-to-deploy

### 6.2 Environment Sync
Configure Create.xyz to sync environment variables with Hostinger.

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify DATABASE_URL format
   - Check Neon database is running
   - Ensure SSL mode is enabled

2. **Shopify API Errors**
   - Verify storefront token permissions
   - Check store domain format
   - Ensure API access is enabled

3. **Build Failures**
   - Check Node.js version (should be 20+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

4. **Auth Issues**
   - Ensure AUTH_SECRET is 32+ characters
   - Verify AUTH_URL matches your domain
   - Check HTTPS is properly configured

### Performance Optimization

1. **Enable Caching**
   - Configure Hostinger caching
   - Set proper cache headers

2. **CDN Setup**
   - Use Hostinger's CDN
   - Optimize images

3. **Database Optimization**
   - Index frequently queried columns
   - Use connection pooling

## Support

For deployment issues:
- Hostinger Support: [Hostinger Help Center](https://support.hostinger.com/)
- Create.xyz Documentation: [Create.xyz Docs](https://docs.create.xyz/)
- Shopify API: [Shopify Storefront API Docs](https://shopify.dev/docs/api/storefront)

## Maintenance

### Regular Tasks
1. **Database Backups**: Set up automated backups in Neon
2. **Security Updates**: Keep dependencies updated
3. **Performance Monitoring**: Monitor with Google Analytics
4. **SSL Renewal**: Auto-renewed with Hostinger

### Monthly Reviews
- Check error logs
- Review performance metrics
- Update content as needed
- Monitor Shopify integration