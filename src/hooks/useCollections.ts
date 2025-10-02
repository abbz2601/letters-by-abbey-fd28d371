import { useQuery } from '@tanstack/react-query';

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  price: string;
  letter_count?: number;
}

// Hardcoded collections data
const COLLECTIONS: Collection[] = [
  {
    id: "1",
    name: "Love Letters",
    slug: "love-letters",
    description: "Heartfelt letters expressing love and affection",
    image_url: "https://images.pexels.com/photos/6956627/pexels-photo-6956627.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "25.00",
    letter_count: 1,
  },
  {
    id: "2",
    name: "Gratitude Collection",
    slug: "gratitude",
    description: "Letters expressing heartfelt appreciation",
    image_url: "https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "22.00",
    letter_count: 1,
  },
  {
    id: "3",
    name: "Encouragement Letters",
    slug: "encouragement",
    description: "Uplifting letters for difficult times",
    image_url: "https://images.pexels.com/photos/6956630/pexels-photo-6956630.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "23.00",
    letter_count: 1,
  },
  {
    id: "4",
    name: "Celebration Collection",
    slug: "celebration",
    description: "Letters for life's special moments",
    image_url: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "24.00",
    letter_count: 1,
  },
  {
    id: "5",
    name: "Sympathy Letters",
    slug: "sympathy",
    description: "Comforting words during difficult times",
    image_url: "https://images.pexels.com/photos/6956631/pexels-photo-6956631.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "26.00",
    letter_count: 1,
  },
  {
    id: "6",
    name: "Friendship Collection",
    slug: "friendship",
    description: "Celebrating the bonds of friendship",
    image_url: "https://images.pexels.com/photos/6195123/pexels-photo-6195123.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    price: "21.00",
    letter_count: 1,
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
