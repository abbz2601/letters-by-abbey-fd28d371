import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/api/shopify/products');
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export function useCollections(featured = false) {
  return useQuery({
    queryKey: ['collections', { featured }],
    queryFn: async () => {
      const params = featured ? '?featured=true' : '';
      const response = await fetch(`/api/collections${params}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch collections: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}

export function useCollection(slug) {
  return useQuery({
    queryKey: ['collection', slug],
    queryFn: async () => {
      if (!slug) throw new Error('Collection slug is required');
      
      const response = await fetch(`/api/collections/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Collection not found');
        }
        throw new Error(`Failed to fetch collection: ${response.status}`);
      }
      return response.json();
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
}