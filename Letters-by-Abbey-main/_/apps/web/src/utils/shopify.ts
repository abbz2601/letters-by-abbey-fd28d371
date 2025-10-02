// Shopify Storefront API Integration
// This file handles communication with Shopify's Storefront API for product data

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!SHOPIFY_DOMAIN || !STOREFRONT_ACCESS_TOKEN) {
  console.warn('⚠️ Shopify configuration missing. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN in .env');
}

const STOREFRONT_API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

// GraphQL query to fetch collections
const GET_COLLECTIONS_QUERY = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            url
            altText
          }
          products(first: 10) {
            edges {
              node {
                id
                handle
                title
                description
                featuredImage {
                  url
                  altText
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// GraphQL query to fetch a single collection by handle
const GET_COLLECTION_BY_HANDLE_QUERY = `
  query getCollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
      handle
      title
      description
      image {
        url
        altText
      }
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            description
            featuredImage {
              url
              altText
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      }
    }
  }
`;

// Generic function to make GraphQL requests to Shopify
async function shopifyFetch(query: string, variables = {}) {
  if (!SHOPIFY_DOMAIN || !STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Shopify configuration is missing. Please check your environment variables.');
  }

  try {
    const response = await fetch(STOREFRONT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  } catch (error) {
    console.error('Shopify API request failed:', error);
    throw error;
  }
}

// Fetch all collections
export async function getCollections(limit = 10) {
  try {
    const data = await shopifyFetch(GET_COLLECTIONS_QUERY, { first: limit });
    
    return data.collections.edges.map(({ node }: any) => ({
      id: node.id,
      handle: node.handle,
      title: node.title,
      description: node.description,
      image: node.image,
      productCount: node.products.edges.length,
      products: node.products.edges.map(({ node: product }: any) => ({
        id: product.id,
        handle: product.handle,
        title: product.title,
        description: product.description,
        image: product.featuredImage,
        price: product.priceRange.minVariantPrice,
        variants: product.variants.edges.map(({ node: variant }: any) => variant),
      })),
    }));
  } catch (error) {
    console.error('Failed to fetch collections:', error);
    return [];
  }
}

// Fetch a single collection by handle
export async function getCollectionByHandle(handle: string) {
  try {
    const data = await shopifyFetch(GET_COLLECTION_BY_HANDLE_QUERY, { handle });
    
    if (!data.collectionByHandle) {
      return null;
    }

    const collection = data.collectionByHandle;
    
    return {
      id: collection.id,
      handle: collection.handle,
      title: collection.title,
      description: collection.description,
      image: collection.image,
      products: collection.products.edges.map(({ node: product }: any) => ({
        id: product.id,
        handle: product.handle,
        title: product.title,
        description: product.description,
        image: product.featuredImage,
        price: product.priceRange.minVariantPrice,
        variants: product.variants.edges.map(({ node: variant }: any) => variant),
      })),
    };
  } catch (error) {
    console.error(`Failed to fetch collection ${handle}:`, error);
    return null;
  }
}

// Helper function to format price
export function formatPrice(price: { amount: string; currencyCode: string }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currencyCode,
  });
  
  return formatter.format(parseFloat(price.amount));
}

// Helper function to create Shopify checkout URL
export function createCheckoutUrl(variantId: string, quantity = 1) {
  const checkoutUrl = `https://${SHOPIFY_DOMAIN}/cart/${variantId}:${quantity}`;
  return checkoutUrl;
}

export default {
  getCollections,
  getCollectionByHandle,
  formatPrice,
  createCheckoutUrl,
};