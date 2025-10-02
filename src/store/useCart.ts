import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  price: string;
}

interface CartItem extends Collection {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (collection: Collection) => void;
  removeItem: (collectionId: string) => void;
  updateQuantity: (collectionId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (collection) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === collection.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === collection.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({ items: [...items, { ...collection, quantity: 1 }] });
        }
      },
      
      removeItem: (collectionId) => {
        set({ items: get().items.filter(item => item.id !== collectionId) });
      },
      
      updateQuantity: (collectionId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(collectionId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === collectionId ? { ...item, quantity } : item
          ),
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotal: () => {
        return get().items.reduce((total, item) => {
          return total + (parseFloat(item.price) * item.quantity);
        }, 0);
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'letters-cart-storage',
    }
  )
);
