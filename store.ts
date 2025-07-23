
'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, User, FilterOptions } from './types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotal: () => number;
}

interface UserStore {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
}

interface FilterStore {
  filters: FilterOptions;
  searchQuery: string;
  setFilters: (filters: FilterOptions) => void;
  setSearchQuery: (query: string) => void;
  clearFilters: () => void;
}

interface UIStore {
  isCartOpen: boolean;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  setCartOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({
            items: [...items, { id: product.id, product, quantity }]
          });
        }
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.product.id !== productId)
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        });
      },
      clearCart: () => set({ items: [] }),
      getItemCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
      getTotal: () => get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
    }),
    {
      name: 'cart-storage'
    }
  )
);

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (user) => set({ user, isLoggedIn: true }),
      logout: () => set({ user: null, isLoggedIn: false }),
      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      },
      addToWishlist: (productId) => {
        const currentUser = get().user;
        if (currentUser) {
          const wishlist = currentUser.wishlist || [];
          if (!wishlist.includes(productId)) {
            set({
              user: {
                ...currentUser,
                wishlist: [...wishlist, productId]
              }
            });
          }
        }
      },
      removeFromWishlist: (productId) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              wishlist: currentUser.wishlist.filter(id => id !== productId)
            }
          });
        }
      }
    }),
    {
      name: 'user-storage'
    }
  )
);

export const useFilterStore = create<FilterStore>((set) => ({
  filters: {},
  searchQuery: '',
  setFilters: (filters) => set({ filters }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearFilters: () => set({ filters: {}, searchQuery: '' })
}));

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  isMenuOpen: false,
  isSearchOpen: false,
  setCartOpen: (open) => set({ isCartOpen: open }),
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setSearchOpen: (open) => set({ isSearchOpen: open })
}));
