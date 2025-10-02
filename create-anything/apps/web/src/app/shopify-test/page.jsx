"use client";
import { useState, useEffect } from 'react';

export default function ShopifyTestPage() {
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runTests = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/shopify/test');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setTestResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runTests();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success': return 'text-green-600';
      case 'Failed': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Success': return 'bg-green-50 border-green-200';
      case 'Failed': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Shopify Integration Test</h1>
            <button
              onClick={runTests}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Run Tests'}
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-800">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Running Shopify connection tests...</p>
            </div>
          )}

          {testResults && (
            <div className="space-y-6">
              {/* Environment Variables */}
              <div className="border rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">Environment Variables</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(testResults.environmentVariables).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="font-medium">{key}:</span>
                      <span className={`px-2 py-1 rounded text-sm ${
                        value === 'Set' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Test Results */}
              {testResults.tests && Object.keys(testResults.tests).length > 0 && (
                <div className="border rounded-lg p-4">
                  <h2 className="text-lg font-semibold mb-3">API Tests</h2>
                  <div className="space-y-4">
                    {Object.entries(testResults.tests).map(([testName, result]) => (
                      <div key={testName} className={`p-4 border rounded-lg ${getStatusBg(result.status)}`}>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{testName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
                          <span className={`font-semibold ${getStatusColor(result.status)}`}>
                            {result.status}
                          </span>
                        </div>
                        
                        {result.shopName && (
                          <p className="text-sm text-gray-600">Shop: {result.shopName}</p>
                        )}
                        
                        {result.shopUrl && (
                          <p className="text-sm text-gray-600">URL: {result.shopUrl}</p>
                        )}
                        
                        {result.productCount !== undefined && (
                          <p className="text-sm text-gray-600">Products found: {result.productCount}</p>
                        )}
                        
                        {result.products && result.products.length > 0 && (
                          <div className="mt-2">
                            <h4 className="font-medium text-sm">Sample Products:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                              {result.products.slice(0, 3).map((product, idx) => (
                                <li key={idx}>{product.title} ({product.handle})</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {result.error && (
                          <div className="mt-2 p-2 bg-red-100 rounded text-sm">
                            <strong>Error:</strong> {typeof result.error === 'string' ? result.error : JSON.stringify(result.error)}
                          </div>
                        )}
                        
                        {result.response && result.status === 'Failed' && (
                          <details className="mt-2">
                            <summary className="cursor-pointer text-sm font-medium">Raw Response</summary>
                            <pre className="mt-1 p-2 bg-gray-100 rounded text-xs overflow-auto">
                              {JSON.stringify(result.response, null, 2)}
                            </pre>
                          </details>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* General Error */}
              {testResults.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800">Configuration Error</h3>
                  <p className="text-red-700">{testResults.error}</p>
                </div>
              )}

              {/* Instructions */}
              <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                <h2 className="text-lg font-semibold mb-3 text-blue-800">Next Steps</h2>
                <div className="text-blue-700 space-y-2">
                  <p>Based on the test results above, here's what you need to check:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ensure all environment variables are set correctly in your project settings</li>
                    <li>Verify your Shopify Storefront Access Token has the correct permissions</li>
                    <li>Check that your Shopify domain is correct (should be: your-store.myshopify.com)</li>
                    <li>Make sure your Shopify app has the Storefront API access enabled</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}