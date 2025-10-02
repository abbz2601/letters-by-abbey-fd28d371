import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  
  // Initialize cart from localStorage
  initCart: () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('letters-cart');
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          set({ items: parsed.items || [] });
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error);
        }
      }
    }
  },
  
  // Save cart to localStorage
  saveCart: (items) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('letters-cart', JSON.stringify({ items }));
    }
  },
  
  addItem: (collection) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === collection.id);
    
    let newItems;
    if (existingItem) {
      newItems = items.map(item =>
        item.id === collection.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newItems = [...items, { ...collection, quantity: 1 }];
    }
    
    set({ items: newItems });
    get().saveCart(newItems);
  },
  
  removeItem: (collectionId) => {
    const newItems = get().items.filter(item => item.id !== collectionId);
    set({ items: newItems });
    get().saveCart(newItems);
  },
  
  updateQuantity: (collectionId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(collectionId);
      return;
    }
    
    const newItems = get().items.map(item =>
      item.id === collectionId
        ? { ...item, quantity }
        : item
    );
    
    set({ items: newItems });
    get().saveCart(newItems);
  },
  
  clearCart: () => {
    set({ items: [] });
    get().saveCart([]);
  },
  
  getTotal: () => {
    return get().items.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
  },
  
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));

// Initialize cart on first load
if (typeof window !== 'undefined') {
  useCartStore.getState().initCart();
}

export default useCartStore;