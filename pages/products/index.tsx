import { useState, useEffect } from 'react';
import Head from 'next/head';
import { ApiResponse, Product } from '../../utils/types';
import ProductList from '../../components/ProductList';


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      const data: ApiResponse<Product[]> = await response.json();

      if (data.success && data.data) {
        setProducts(data.data);
      } else {
        setError(data.error || 'No se pudo obtener la lista de productos');
      }
    } catch (err) {
      setError('Ocurrió un error de red');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId: number) => {
    try {
      setError('');
      setSuccessMessage('');

      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });

      const data: ApiResponse<any> = await response.json();

      if (data.success) {
        const product = products.find(p => p.id === productId);
        setSuccessMessage(`¡${product?.name} agregado al carrito correctamente!`);

        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(data.error || 'No se pudo agregar el producto al carrito');
      }
    } catch (err) {
      setError('Ocurrió un error de red');
    }
  };

  return (
    <>
      <Head>
        <title>Productos</title>
        <meta name="description" content="Explora nuestro catálogo de productos" />
      </Head>

      <div className="container">
        <h1 className="page-title">Catálogo de Productos</h1>


        <ProductList 
          products={products} 
          onAddToCart={handleAddToCart}
          loading={loading}
          />
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </>
  );
}
