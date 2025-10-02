import { Hono } from 'hono';
import type { Handler } from 'hono';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export const api = new Hono();

// Find all route files recursively
function findRouteFiles(dir: string): string[] {
  const files: string[] = [];
  
  try {
    const entries = readdirSync(dir);
    
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findRouteFiles(fullPath));
      } else if (entry === 'route.js' || entry === 'route.ts') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}:`, error);
  }
  
  return files;
}

// Convert file path to Hono route pattern
function getHonoPath(filePath: string) {
  const routeParts = filePath
    .replace(/\\\\/g, '/')
    .split('/')
    .filter(part => 
      part !== 'src' && 
      part !== 'app' && 
      part !== 'api' && 
      part !== 'route.js' && 
      part !== 'route.ts' &&
      part.length > 0
    );

  if (routeParts.length === 0) {
    return [{ name: 'root', pattern: '' }];
  }
  
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\\[(\\.\\.\\.)(.+?)\\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === '...'
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  
  return transformedParts;
}

// Import and register all routes
async function registerRoutes() {
  const apiDir = join(__dirname, '..', 'src', 'app', 'api');
  const routeFiles = findRouteFiles(apiDir)
    .slice()
    .sort((a, b) => b.length - a.length);

  // Clear existing routes
  api.routes = [];

  for (const routeFile of routeFiles) {
    try {
      // Normalize path for cross-platform compatibility
      const normalizedPath = routeFile.replace(/\\\\/g, '/');
      
      // Simple dynamic import without query parameters to avoid Windows issues
      const route = await import(normalizedPath);

      const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
      
      for (const method of methods) {
        if (route[method]) {
          const parts = getHonoPath(routeFile);
          const honoPath = `/${parts.map(({ pattern }) => pattern).join('/')}`;
          
          const handler: Handler = async (c) => {
            const params = c.req.param();
            try {
              return await route[method](c.req.raw, { params });
            } catch (error) {
              console.error(`Error executing ${method} ${honoPath}:`, error);
              return new Response(
                JSON.stringify({ 
                  error: 'Internal server error',
                  message: error instanceof Error ? error.message : 'Unknown error'
                }), 
                { 
                  status: 500,
                  headers: { 'Content-Type': 'application/json' }
                }
              );
            }
          };
          
          const methodLowercase = method.toLowerCase();
          switch (methodLowercase) {
            case 'get':
              api.get(honoPath, handler);
              break;
            case 'post':
              api.post(honoPath, handler);
              break;
            case 'put':
              api.put(honoPath, handler);
              break;
            case 'delete':
              api.delete(honoPath, handler);
              break;
            case 'patch':
              api.patch(honoPath, handler);
              break;
            default:
              console.warn(`Unsupported method: ${method}`);
              break;
          }
          
          console.log(`✓ Registered ${method} ${honoPath}`);
        }
      }
    } catch (error) {
      console.error(`Error importing route file ${routeFile}:`, error);
      // Continue with other routes instead of failing completely
    }
  }
}

// Initialize routes
registerRoutes().catch(console.error);

export default api;