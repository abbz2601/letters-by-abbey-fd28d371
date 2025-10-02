import { useQuery } from '@tanstack/react-query';

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  price: string;
  letter_count?: number;
  shopify_product_id: string;
}

// Hardcoded collections data
const COLLECTIONS: Collection[] = [
  {
    id: "1",
    name: "Love Letters",
    slug: "love-letters",
    description: "Heartfelt letters expressing love and affection",
    image_url: "/images/collections/wedding-day.png",
    price: "35.00",
    letter_count: 1,
    shopify_product_id: "8980688765181",
  },
  {
    id: "2",
    name: "Gratitude Collection",
    slug: "gratitude",
    description: "Letters expressing heartfelt appreciation",
    image_url: "/images/collections/finding-joy.png",
    price: "24.00",
    letter_count: 1,
    shopify_product_id: "8980690141437",
  },
  {
    id: "3",
    name: "Encouragement Letters",
    slug: "encouragement",
    description: "Uplifting letters for difficult times",
    image_url: "/images/collections/you-are-enough.png",
    price: "22.00",
    letter_count: 1,
    shopify_product_id: "8980740079869",
  },
  {
    id: "4",
    name: "Celebration Collection",
    slug: "celebration",
    description: "Letters for life's special moments",
    image_url: "/images/collections/wishing-you-joy.png",
    price: "28.00",
    letter_count: 1,
    shopify_product_id: "8980687257853",
  },
  {
    id: "5",
    name: "Sympathy Letters",
    slug: "sympathy",
    description: "Comforting words during difficult times",
    image_url: "/images/collections/grief-support.png",
    price: "25.00",
    letter_count: 1,
    shopify_product_id: "8980685029629",
  },
  {
    id: "6",
    name: "Friendship Collection",
    slug: "friendship",
    description: "Celebrating the bonds of friendship",
    image_url: "/images/collections/reflections-season.png",
    price: "30.00",
    letter_count: 1,
    shopify_product_id: "8980691222781",
  },
];

export function useCollections() {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return COLLECTIONS;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useCollection(slug: string) {
  return useQuery({
    queryKey: ['collection', slug],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const collection = COLLECTIONS.find(c => c.slug === slug);
      if (!collection) {
        throw new Error('Collection not found');
      }
      return collection;
    },
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
