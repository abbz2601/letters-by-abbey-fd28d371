'use client';

import { useState, useEffect } from 'react';

export default function ConnectionTest() {
  const [status, setStatus] = useState('checking');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [shopifyStatus, setShopifyStatus] = useState('checking');

  useEffect(() => {
    testConnections();
  }, []);

  const testConnections = async () => {
    try {
      // Test environment variables
      const hasShopifyVars = !!(
        process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN && 
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
      );
      
      console.log('🔧 Environment check:', {
        domain: !!process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
        token: !!process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
      });

      if (!hasShopifyVars) {
        setShopifyStatus('missing-env');
      }

      // Test collections API
      console.log('🔍 Testing collections API...');
      const response = await fetch('/api/collections?source=shopify');
      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setData(result);
        setShopifyStatus('connected');
        console.log('✅ Collections API successful:', result);
      } else {
        setStatus('error');
        setError(result.error || 'Unknown error');
        console.error('❌ Collections API failed:', result);
      }
    } catch (err) {
      setStatus('error');
      setError(err.message);
      console.error('❌ Test error:', err);
    }
  };

  const testShopifyDirect = async () => {
    try {
      setShopifyStatus('testing');
      console.log('🧪 Testing direct Shopify connection...');
      
      const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
      const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
      
      if (!domain || !token) {
        setShopifyStatus('missing-env');
        return;
      }

      const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': token,
        },
        body: JSON.stringify({
          query: `
            query {
              shop {
                name
                description
              }
              products(first: 3) {
                edges {
                  node {
                    id
                    title
                    handle
                  }
                }
              }
            }
          `
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.errors) {
          setShopifyStatus('error');
          console.error('GraphQL errors:', result.errors);
        } else {
          setShopifyStatus('connected');
          console.log('✅ Direct Shopify test successful:', result);
        }
      } else {
        setShopifyStatus('error');
        console.error('❌ Direct Shopify test failed:', response.status);
      }
    } catch (err) {
      setShopifyStatus('error');
      console.error('❌ Direct Shopify error:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mb-8 border-2 border-blue-200">
      <h2 className="text-2xl font-crimson-text font-bold text-[#8B4513] mb-4">
        🔧 Website Connection Diagnostics
      </h2>
      
      {/* Environment Variables Check */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Environment Variables</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <span className={`mr-2 ${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ? 'text-green-600' : 'text-red-600'}`}>
              {process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ? '✅' : '❌'}
            </span>
            <span>SHOPIFY_STORE_DOMAIN</span>
            {process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN && (
              <span className="ml-2 text-xs text-gray-500">({process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN})</span>
            )}
          </div>
          <div className="flex items-center">
            <span className={`mr-2 ${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ? 'text-green-600' : 'text-red-600'}`}>
              {process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ? '✅' : '❌'}
            </span>
            <span>SHOPIFY_ACCESS_TOKEN</span>
            {process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN && (
              <span className="ml-2 text-xs text-gray-500">({process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN.substring(0, 8)}...)</span>
            )}
          </div>
        </div>
      </div>

      {/* Collections API Test */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800">Collections API Test</h3>
          <button 
            onClick={testConnections}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retest
          </button>
        </div>
        
        {status === 'checking' && (
          <div className="flex items-center text-blue-600">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Testing connections...
          </div>
        )}
        
        {status === 'success' && (
          <div className="text-green-600 space-y-2">
            <div className="flex items-center">
              <span className="text-2xl mr-3">✅</span>
              <span className="font-semibold">API Working!</span>
            </div>
            
            <div className="bg-green-50 p-3 rounded border">
              <h4 className="font-semibold text-green-800 mb-2">
                Collections Found: {Array.isArray(data) ? data.length : 0}
              </h4>
              {Array.isArray(data) && data.slice(0, 3).map((collection, index) => (
                <div key={index} className="bg-white p-2 mb-2 rounded border">
                  <div className="font-semibold text-[#8B4513]">{collection.title}</div>
                  <div className="text-sm text-[#A08B7A]">${collection.price}</div>
                  <div className="text-xs text-gray-500">
                    {collection.shopify_product_id ? '🛍️ Shopify' : '💾 Database/Sample'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-red-600 space-y-2">
            <div className="flex items-center">
              <span className="text-2xl mr-3">❌</span>
              <span className="font-semibold">API Issues Detected</span>
            </div>
            <div className="bg-red-50 p-3 rounded border text-sm">
              <p className="text-red-800">{error}</p>
            </div>
          </div>
        )}
      </div>

      {/* Direct Shopify Test */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800">Direct Shopify Connection</h3>
          <button 
            onClick={testShopifyDirect}
            className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Test Shopify
          </button>
        </div>
        
        {shopifyStatus === 'checking' && (
          <div className="text-gray-600">⏳ Ready to test...</div>
        )}
        
        {shopifyStatus === 'testing' && (
          <div className="text-blue-600">🔄 Testing Shopify...</div>
        )}
        
        {shopifyStatus === 'connected' && (
          <div className="text-green-600">✅ Shopify Connected!</div>
        )}
        
        {shopifyStatus === 'missing-env' && (
          <div className="text-yellow-600">⚠️ Missing environment variables</div>
        )}
        
        {shopifyStatus === 'error' && (
          <div className="text-red-600">❌ Shopify connection failed</div>
        )}
      </div>

      <div className="text-xs text-gray-500 mt-4 p-3 bg-gray-50 rounded">
        <p><strong>Development Note:</strong> This component helps diagnose connection issues. Remove it before production deployment.</p>
      </div>
    </div>
  );
}