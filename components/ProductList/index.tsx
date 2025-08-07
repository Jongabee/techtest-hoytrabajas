import { useState } from 'react';
import { Product } from '../../utils/types';
import styles from './index.module.css';

interface ProductListProps {
  products: Product[];
  onAddToCart: (productId: number) => Promise<void>;
  loading?: boolean;
}

export default function ProductList({ products, onAddToCart, loading }: ProductListProps) {
  const [addingToCart, setAddingToCart] = useState<number | null>(null);

  const handleAddToCart = async (productId: number) => {
    setAddingToCart(productId);
    try {
      await onAddToCart(productId);
    } finally {
      setAddingToCart(null);
    }
  };

  if (loading) {
    return (
      <div className={styles.productList}>
        <div className={styles.loading}>Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className={styles.productList}>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h3>{product.name}</h3>
            <p className={styles.price}>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product.id)}
              disabled={addingToCart === product.id}
              className={styles.addToCartBtn}
            >
              {addingToCart === product.id ? 'Agregando...' : 'Agregar al carrito'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
