import { CartItem } from '../../utils/types';
import styles from './index.module.css';

interface CartViewProps {
  cartItems: CartItem[];
  loading?: boolean;
}

export default function CartView({ cartItems, loading }: CartViewProps) {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  if (loading) {
    return (
      <div className={styles.cartView}>
        <div className={styles.loading}>Cargando carrito...</div>
      </div>
    );
  }

  return (
    <div className={styles.cartView}>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>${item.price}</p>
                  {item.quantity && item.quantity > 1 && (
                    <p className={styles.quantity}>Cantidad: {item.quantity}</p>
                  )}
                </div>
                <div className={styles.itemTotal}>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.total}>
              <strong>Total: ${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
