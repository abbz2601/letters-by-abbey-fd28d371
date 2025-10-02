export async function GET(request) {
  try {
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    const storefrontAccessToken =
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !storefrontAccessToken) {
      // Fallback to hardcoded data if environment variables are missing
      const products = [
        {
          id: "wedding-blessings",
          title: "Wedding Blessings Letter",
          handle:
            "wedding-blessings-letter-a-keepsake-for-the-beginning-of-forever",
          description: "A keepsake for the beginning of forever",
          price: "35.00",
          currency: "AUD",
          image:
            "https://ucarecdn.com/dc299b7f-ca1e-424d-84c3-774bd2a1c84b/-/format/auto/",
          imageAlt: "Wedding Blessings Letter",
          available: true,
          variantId: "wedding-blessings-variant",
          url: "https://csvqai-vt.myshopify.com/products/wedding-blessings-letter-a-keepsake-for-the-beginning-of-forever",
        },
        // ... rest of hardcoded products for fallback
      ];
      return Response.json({ products, source: "fallback" });
    }

    // Fetch real products from Shopify
    const productsQuery = `
      query {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description
              onlineStoreUrl
              availableForSale
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                      currencyCode
                    }
                    availableForSale
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query: productsQuery }),
    });

    if (!response.ok) {
      throw new Error(
        `Shopify API returned ${response.status}: ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`Shopify GraphQL errors: ${JSON.stringify(data.errors)}`);
    }

    // Transform Shopify data to match our expected format
    const products = data.data.products.edges.map((edge) => {
      const node = edge.node;
      const variant = node.variants.edges[0]?.node;
      const image = node.images.edges[0]?.node;

      return {
        id: node.id,
        title: node.title,
        handle: node.handle,
        description: node.description || "",
        price: variant?.price?.amount || "0.00",
        currency: variant?.price?.currencyCode || "AUD",
        image: image?.url || "",
        imageAlt: image?.altText || node.title,
        available: node.availableForSale && variant?.availableForSale !== false,
        variantId: variant?.id || "",
        url: node.onlineStoreUrl || `https://${domain}/products/${node.handle}`,
      };
    });

    return Response.json({ products, source: "shopify" });
  } catch (error) {
    console.error("Error fetching Shopify products:", error);

    // Fallback to hardcoded data on error
    const products = [
      {
        id: "wedding-blessings",
        title: "Wedding Blessings Letter",
        handle:
          "wedding-blessings-letter-a-keepsake-for-the-beginning-of-forever",
        description: "A keepsake for the beginning of forever",
        price: "35.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/dc299b7f-ca1e-424d-84c3-774bd2a1c84b/-/format/auto/",
        imageAlt: "Wedding Blessings Letter",
        available: true,
        variantId: "wedding-blessings-variant",
        url: "https://csvqai-vt.myshopify.com/products/wedding-blessings-letter-a-keepsake-for-the-beginning-of-forever",
      },
      {
        id: "seasonal-reflections",
        title: "Seasonal Reflections Letter",
        handle: "seasonal-reflections-letter-words-for-every-season-of-life",
        description: "Words for every season of life",
        price: "30.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/caad1aee-193a-4728-b72d-bf5c5c14d987/-/format/auto/",
        imageAlt: "Seasonal Reflections Letter",
        available: true,
        variantId: "seasonal-reflections-variant",
        url: "https://csvqai-vt.myshopify.com/products/seasonal-reflections-letter-words-for-every-season-of-life",
      },
      {
        id: "birthday-joy",
        title: "Birthday Joy Letter",
        handle: "birthday-joy-letter-celebrate-a-life-beautifully",
        description: "Celebrate a life beautifully",
        price: "28.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/370dd535-292a-4567-82b6-30200bdf95c3/-/format/auto/",
        imageAlt: "Birthday Joy Letter",
        available: true,
        variantId: "birthday-joy-variant",
        url: "https://csvqai-vt.myshopify.com/products/birthday-joy-letter-celebrate-a-life-beautifully",
      },
      {
        id: "grief-support",
        title: "Grief Support Letter",
        handle: "grief-support-letter-words-when-silence-feels-heavy",
        description: "Words when silence feels heavy",
        price: "25.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/434460cb-998e-4b76-9db9-ca589fae01a9/-/format/auto/",
        imageAlt: "Grief Support Letter",
        available: true,
        variantId: "grief-support-variant",
        url: "https://csvqai-vt.myshopify.com/products/grief-support-letter-words-when-silence-feels-heavy",
      },
      {
        id: "everyday-joy",
        title: "Everyday Joy Letter",
        handle: "everyday-joy-letter-because-joy-lives-in-the-little-things",
        description: "Because joy lives in the little things",
        price: "24.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/a934c1b5-102e-4f94-936d-83e3a4a65dad/-/format/auto/",
        imageAlt: "Everyday Joy Letter",
        available: true,
        variantId: "everyday-joy-variant",
        url: "https://csvqai-vt.myshopify.com/products/everyday-joy-letter-because-joy-lives-in-the-little-things",
      },
      {
        id: "daily-affirmations",
        title: "Daily Affirmations Letter",
        handle:
          "daily-affirmations-letter-a-daily-reminder-that-you-are-enough",
        description: "A daily reminder that you are enough",
        price: "22.00",
        currency: "AUD",
        image:
          "https://ucarecdn.com/370732f1-5e48-49cb-9199-947eb74e4cf5/-/format/auto/",
        imageAlt: "Daily Affirmations Letter",
        available: true,
        variantId: "daily-affirmations-variant",
        url: "https://csvqai-vt.myshopify.com/products/daily-affirmations-letter-a-daily-reminder-that-you-are-enough",
      },
    ];

    return Response.json({
      products,
      source: "fallback",
      error: error.message,
    });
  }
}
