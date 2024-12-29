import { CartItem } from '@/types/cart';
import { create } from 'zustand';

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: CartItem) => void;
  remove: (product: CartItem) => void;
  removeAll: () => void;
  increaseProductQuality: (product: CartItem) => void;
  decreaseProductQuality: (product: CartItem) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: JSON.parse(localStorage.getItem('cart') ?? '[]') as CartItem[],
  count: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
  add: (product) => {
    const cartTemp = [...get().cart];
    const existingProduct = cartTemp.find((item) => item.id === product.id && item.size === product.size);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      set((state) => ({ ...state, cart: cartTemp }));
    } else {
      set((state) => ({ ...state, cart: [...state.cart, product] }));
    }
    localStorage.setItem('cart', JSON.stringify(get().cart));
  },
  increaseProductQuality: (product) => {
    const cartTemp = [...get().cart];
    const existingProduct = cartTemp.find((item) => item.id === product.id && item.size === product.size);
    if (existingProduct) {
      existingProduct.quantity += 1;
      set((state) => ({ ...state, cart: cartTemp }));
    }
    localStorage.setItem('cart', JSON.stringify(get().cart));
  },
  decreaseProductQuality: (product) => {
    const cartTemp = [...get().cart];
    const existingProduct = cartTemp.find((item) => item.id === product.id && item.size === product.size);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
      set((state) => ({ ...state, cart: cartTemp }));
    }
    localStorage.setItem('cart', JSON.stringify(get().cart));
  },
  remove: (product) => {
    console.log(
      'remove product',
      get().cart.filter((item) => item.id !== product.id && item.size !== product.size),
    );
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== product.id && item.size === product.size),
    }));
    localStorage.setItem('cart', JSON.stringify(get().cart));
  },
  removeAll: () => {
    set({ cart: [] });
    localStorage.removeItem('cart');
  },
}));
