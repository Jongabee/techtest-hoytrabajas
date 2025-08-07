import { Product, CartItem } from './types';
import { PRODUCTS } from './data';

let cart: CartItem[] = [];

export const getCart = (): CartItem[] => {
  return [...cart];
};

export const addToCart = (productId: number): { success: boolean; error?: string } => {
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (!product) {
    return { success: false, error: 'Producto no encontrado' };
  }

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return { success: true };
};

export const clearCart = (): void => {
  cart = [];
};

export const getCartTotal = (): number => {
  return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
};
