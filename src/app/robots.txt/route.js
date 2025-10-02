export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Important pages
Allow: /shop
Allow: /about
Allow: /contact
Allow: /faq

# Policy pages
Allow: /privacy
Allow: /terms
Allow: /shipping
Allow: /returns

# Sitemap location
Sitemap: https://lettersbyabbey.com/sitemap.xml

# Block any sensitive areas
Disallow: /api
Disallow: /admin`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}