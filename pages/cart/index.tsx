import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ApiResponse, CartItem } from '../../utils/types';
import CartView from '../../components/CartView';


export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/cart');
      const data: ApiResponse<CartItem[]> = await response.json();

      if (data.success && data.data) {
        setCartItems(data.data);
      } else {
        setError(data.error || 'No se pudo obtener el carrito');
      }
    } catch (err) {
      setError('Ocurrió un error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Carrito de Compras</title>
        <meta name="description" content="Visualiza tu carrito de compras" />
      </Head>

      <div className="container">
        <h1 className="page-title">Carrito de compras</h1>

        {error && <div className="error-message">{error}</div>}

        <CartView cartItems={cartItems} loading={loading} />
      </div>
    </>
  );
}
