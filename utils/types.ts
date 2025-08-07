export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface AddToCartRequest {
  productId: number;
}

export interface BestCombinationResult {
  products: Product[];
  totalPrice: number;
  remainingBudget: number;
}
