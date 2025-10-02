export async function GET(request) {
  try {
    // Check environment variables
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    const apiKey = process.env.SHOPIFY_API_KEY;
    const apiSecret = process.env.SHOPIFY_API_SECRET;

    const results = {
      environmentVariables: {
        domain: domain ? 'Set' : 'Missing',
        storefrontAccessToken: storefrontAccessToken ? 'Set' : 'Missing',
        apiKey: apiKey ? 'Set' : 'Missing',
        apiSecret: apiSecret ? 'Set' : 'Missing'
      },
      tests: {}
    };

    if (!domain || !storefrontAccessToken) {
      results.error = 'Missing required environment variables';
      return Response.json(results);
    }

    // Test Storefront API connection
    try {
      const storefrontQuery = `
        query {
          shop {
            name
            description
            primaryDomain {
              url
            }
          }
        }
      `;

      const storefrontResponse = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
        },
        body: JSON.stringify({ query: storefrontQuery })
      });

      const storefrontData = await storefrontResponse.json();
      
      if (storefrontResponse.ok && !storefrontData.errors) {
        results.tests.storefrontAPI = {
          status: 'Success',
          shopName: storefrontData.data?.shop?.name || 'Unknown',
          shopUrl: storefrontData.data?.shop?.primaryDomain?.url || 'Unknown'
        };
      } else {
        results.tests.storefrontAPI = {
          status: 'Failed',
          error: storefrontData.errors || `HTTP ${storefrontResponse.status}`,
          response: storefrontData
        };
      }
    } catch (error) {
      results.tests.storefrontAPI = {
        status: 'Failed',
        error: error.message
      };
    }

    // Test Admin API connection (if API key and secret are provided)
    if (apiKey && apiSecret) {
      try {
        const adminResponse = await fetch(`https://${domain}/admin/api/2023-10/shop.json`, {
          method: 'GET',
          headers: {
            'X-Shopify-Access-Token': apiSecret,
          }
        });

        const adminData = await adminResponse.json();
        
        if (adminResponse.ok) {
          results.tests.adminAPI = {
            status: 'Success',
            shopName: adminData.shop?.name || 'Unknown'
          };
        } else {
          results.tests.adminAPI = {
            status: 'Failed',
            error: `HTTP ${adminResponse.status}`,
            response: adminData
          };
        }
      } catch (error) {
        results.tests.adminAPI = {
          status: 'Failed',
          error: error.message
        };
      }
    }

    // Test product fetch
    try {
      const productsQuery = `
        query {
          products(first: 3) {
            edges {
              node {
                id
                title
                handle
                description
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

      const productsResponse = await fetch(`https://${domain}/api/2023-10/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
        },
        body: JSON.stringify({ query: productsQuery })
      });

      const productsData = await productsResponse.json();
      
      if (productsResponse.ok && !productsData.errors) {
        results.tests.productFetch = {
          status: 'Success',
          productCount: productsData.data?.products?.edges?.length || 0,
          products: productsData.data?.products?.edges?.map(edge => ({
            id: edge.node.id,
            title: edge.node.title,
            handle: edge.node.handle
          })) || []
        };
      } else {
        results.tests.productFetch = {
          status: 'Failed',
          error: productsData.errors || `HTTP ${productsResponse.status}`,
          response: productsData
        };
      }
    } catch (error) {
      results.tests.productFetch = {
        status: 'Failed',
        error: error.message
      };
    }

    return Response.json(results);
  } catch (error) {
    return Response.json({
      error: 'Test failed',
      message: error.message
    }, { status: 500 });
  }
}