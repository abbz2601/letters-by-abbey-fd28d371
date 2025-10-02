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
    name: "Wedding Blessings Letter - A Keepsake for the Beginning of Forever",
    slug: "wedding-blessings",
    description: "Celebrate one of life's most beautiful milestones with a heartfelt wedding letter. Perfect for the couple, parents, or as a meaningful gift, this handwritten letter captures the joy, promise, and beauty of forever.",
    image_url: "/images/collections/wedding-day.png",
    price: "35.00",
    letter_count: 1,
    shopify_product_id: "8980688765181",
  },
  {
    id: "2",
    name: "Everyday Joy Letter - Because Joy Lives in the Little Things",
    slug: "everyday-joy",
    description: "Happiness doesn't always come in grand gestures - sometimes it's found in the quiet, everyday moments. This letter celebrates life's small blessings, offering words that bring warmth and gratitude to any day.",
    image_url: "/images/collections/finding-joy.png",
    price: "24.00",
    letter_count: 1,
    shopify_product_id: "8980690141437",
  },
  {
    id: "3",
    name: "Daily Affirmations Letter - A Daily Reminder That You Are Enough",
    slug: "daily-affirmations",
    description: "Start every day with words that lift you up. This affirmation letter is designed to be a gentle, powerful reminder of your worth, strength, and beauty - just as you are.",
    image_url: "/images/collections/you-are-enough.png",
    price: "22.00",
    letter_count: 1,
    shopify_product_id: "8980740079869",
  },
  {
    id: "4",
    name: "Birthday Joy Letter - Celebrate a Life, Beautifully",
    slug: "birthday-joy",
    description: "Birthdays are more than just another year - they're a celebration of a life that matters. This letter honours that person with words that make them feel seen, loved, and truly celebrated.",
    image_url: "/images/collections/wishing-you-joy.png",
    price: "28.00",
    letter_count: 1,
    shopify_product_id: "8980687257853",
  },
  {
    id: "5",
    name: "Grief Support Letter - Words When Silence Feels Heavy",
    slug: "grief-support",
    description: "In times of loss, words can feel impossible - but they're also incredibly powerful. This letter offers comfort, understanding, and a gentle reminder that they're not alone in their grief.",
    image_url: "/images/collections/grief-support.png",
    price: "25.00",
    letter_count: 1,
    shopify_product_id: "8980685029629",
  },
  {
    id: "6",
    name: "Seasonal Reflections Letter - Words for Every Season of Life",
    slug: "seasonal-reflections",
    description: "Pause, breathe, and embrace the season you're in. Whether it's a time of growth, rest, or transformation, this letter meets you where you are with words that feel like coming home.",
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
