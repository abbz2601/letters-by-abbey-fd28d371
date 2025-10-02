# Create.xyz Deployment Guide for Letters by Abbey

This guide will help you deploy your Letters by Abbey website to Create.xyz with built-in database and Shopify integration.

## Prerequisites

1. **Create.xyz Account** 
2. **Shopify Store** with Storefront API access
3. **GitHub Repository** (already set up)
4. **Custom Domain** (optional - Create.xyz provides subdomain)

## Step 1: Create.xyz Project Setup

### 1.1 Connect GitHub Repository
1. Go to [Create.xyz Dashboard](https://create.xyz/)
2. Click **"New Project"**
3. Connect your GitHub account
4. Select repository: `abbz2601/Letters-by-Abbey`
5. Choose the web app directory: `apps/web`

### 1.2 Configure Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "installCommand": "npm install",
  "startCommand": "npm start"
}
```

## Step 2: Environment Variables Setup

### 2.1 Database Configuration
**Good News!** Create.xyz automatically provides a PostgreSQL database.
- No manual setup required
- `DATABASE_URL` is automatically injected
- Database is ready to use immediately

### 2.2 Shopify Configuration
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

### 2.3 Set Environment Variables in Create.xyz
In your Create.xyz project dashboard, add these environment variables:

```bash
# Authentication (Generate at: https://generate-secret.vercel.app/32)
AUTH_SECRET=your-32-character-secret-key-here

# Domain Configuration (Replace with your Create.xyz domain)
AUTH_URL=https://your-project.create.xyz
NEXT_PUBLIC_API_URL=https://your-project.create.xyz
NEXT_PUBLIC_SITE_URL=https://your-project.create.xyz

# Shopify Integration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-token

# Email Marketing (ConvertKit)
CONVERTKIT_API_KEY=your-convertkit-api-key-here
CONVERTKIT_FORM_ID=5540fe4df6

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-96FCD7QMB1

# Production Settings
NODE_ENV=production
```

## Step 3: Database Setup

### 3.1 Access Create.xyz Database
1. In your Create.xyz dashboard, go to **Database** tab
2. Create tables using the SQL console or database viewer

### 3.2 Create Required Tables
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

## Step 4: Domain Configuration (Optional)

### 4.1 Custom Domain Setup
1. In Create.xyz dashboard, go to **Domains** tab
2. Add your custom domain
3. Update DNS records as instructed by Create.xyz
4. Update environment variables with your custom domain

### 4.2 SSL Certificate
- Create.xyz automatically provides SSL certificates
- HTTPS is enabled by default

## Step 5: Deployment

### 5.1 Automatic Deployment
1. Push changes to your `main` branch
2. Create.xyz automatically builds and deploys
3. Monitor deployment in the **Deployments** tab

### 5.2 Manual Deployment
1. In Create.xyz dashboard, click **Deploy**
2. Select branch (usually `main`)
3. Monitor build logs

## Step 6: Testing

### 6.1 Pre-deployment Test
Test locally with Create.xyz environment:
```bash
cd apps/web
cp .env.production .env
# Update URLs to match your Create.xyz domain
npm run build
npm start
```

### 6.2 Post-deployment Test
1. Visit your Create.xyz domain
2. Test key functionality:
   - Homepage loads ✅
   - Shop page shows collections ✅
   - Contact form works ✅
   - Email signup works ✅
   - Google Analytics tracking ✅
   - Shopify integration ✅

## Step 7: Production Optimizations

### 7.1 Performance
- Create.xyz provides CDN automatically
- Enable caching in your app settings
- Optimize images (already done)

### 7.2 Monitoring
- Use Create.xyz built-in analytics
- Monitor error logs in dashboard
- Set up uptime monitoring

## Advantages of Create.xyz

### ✅ **Built-in Features:**
- **Database**: PostgreSQL included, no setup needed
- **Hosting**: Optimized for React/Node.js apps
- **CDN**: Global content delivery network
- **SSL**: Automatic HTTPS certificates
- **Monitoring**: Built-in error tracking and analytics
- **Scaling**: Automatic scaling based on traffic

### ✅ **Developer Experience:**
- **Git Integration**: Push-to-deploy workflow
- **Environment Management**: Easy variable configuration
- **Database Console**: Built-in database management
- **Real-time Logs**: Live deployment and runtime logs

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Database is automatically provided by Create.xyz
   - Check if tables exist in database console
   - Verify SQL syntax in table creation

2. **Shopify API Errors**
   - Verify storefront token permissions
   - Check store domain format (include `.myshopify.com`)
   - Ensure API access is enabled in Shopify

3. **Build Failures**
   - Check build logs in Create.xyz dashboard
   - Verify all dependencies are in package.json
   - Check for TypeScript/ESLint errors

4. **Environment Variables**
   - Ensure all required variables are set
   - Check for typos in variable names
   - Restart deployment after variable changes

### Getting Help

- **Create.xyz Support**: Available in your dashboard
- **Documentation**: [docs.create.xyz](https://docs.create.xyz)
- **Community**: Create.xyz Discord/forum

## Maintenance

### Regular Tasks
1. **Automatic Backups**: Create.xyz handles database backups
2. **Security Updates**: Platform automatically updates
3. **Performance Monitoring**: Check dashboard metrics
4. **Content Updates**: Update through admin interface

### Monthly Reviews
- Review Create.xyz analytics
- Check error rates in dashboard
- Monitor Shopify integration health
- Update content as needed

---

## 🚀 **Your Letters by Abbey Website is Ready for Create.xyz!**

This setup gives you:
- ✅ **Zero-config database** (PostgreSQL included)
- ✅ **One-click deployment** from GitHub
- ✅ **Automatic scaling** and CDN
- ✅ **Built-in monitoring** and error tracking
- ✅ **Shopify integration** ready to go
- ✅ **Professional domain** with SSL

**Next Step**: Connect your GitHub repository to Create.xyz and deploy! 🎊