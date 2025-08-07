import Head from 'next/head';
import BudgetOptimizer from '../../components/BudgetOptimizer';
import { PRODUCTS } from '../../utils/data';
import styles from './combination.module.css';

export default function Combinacion() {
  return (
    <>
      <Head>
        <title>Optimizador de Presupuesto</title>
        <meta name="description" content="Encuentra la combinación óptima de productos dentro de tu presupuesto" />
      </Head>

      <div className={styles.container}>
        <div className={styles.infoBox}>
          <h2 className={styles.heading}>¿Cómo funciona?</h2>
          <p className={styles.paragraph}>
            Ingresa tu presupuesto y encuentra la mejor combinación de productos que maximice el valor sin superar tu límite.
          </p>
        </div>

        <BudgetOptimizer products={PRODUCTS} />
      </div>
    </>
  );
}
