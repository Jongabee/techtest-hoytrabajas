import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';

export default function Navigation() {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo}>
          TechTest - Hoy trabajas
        </Link>

        <div className={styles.navLinks}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            Inicio
          </Link>
          <Link 
            href="/products" 
            className={`${styles.navLink} ${isActive('/products') ? styles.active : ''}`}
          >
            Productos
          </Link>
          <Link 
            href="/cart" 
            className={`${styles.navLink} ${isActive('/cart') ? styles.active : ''}`}
          >
            Carrito
          </Link>
          <Link 
            href="/combination" 
            className={`${styles.navLink} ${isActive('/combination') ? styles.active : ''}`}
          >
            Optimizador de presupuesto
          </Link>
        </div>
      </div>
    </nav>
  );
}
