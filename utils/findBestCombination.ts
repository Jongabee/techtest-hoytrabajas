import { Product, BestCombinationResult } from './types';

export function findBestCombination(products: Product[], budget: number): BestCombinationResult {
  if (budget <= 0 || products.length === 0) {
    return {
      products: [],
      totalPrice: 0,
      remainingBudget: budget
    };
  }

  const n = products.length;
  
  const dp: number[][] = Array(n + 1).fill(null).map(() => Array(budget + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    const currentProduct = products[i - 1];
    
    for (let w = 0; w <= budget; w++) {
      dp[i][w] = dp[i - 1][w];
      
      if (currentProduct.price <= w) {
        const valueWithCurrent = dp[i - 1][w - currentProduct.price] + currentProduct.price;
        dp[i][w] = Math.max(dp[i][w], valueWithCurrent);
      }
    }
  }
  
  const selectedProducts: Product[] = [];
  let remainingBudget = budget;
  
  for (let i = n; i > 0 && remainingBudget > 0; i--) {
    if (dp[i][remainingBudget] !== dp[i - 1][remainingBudget]) {
      const product = products[i - 1];
      selectedProducts.push(product);
      remainingBudget -= product.price;
    }
  }
  
  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);
  
  return {
    products: selectedProducts.reverse(),
    totalPrice,
    remainingBudget: budget - totalPrice
  };
}
