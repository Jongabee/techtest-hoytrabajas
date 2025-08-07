import { useState } from 'react';
import { Product, BestCombinationResult } from '../../utils/types';
import { findBestCombination } from '../../utils/findBestCombination';
import styles from './index.module.css';

interface BudgetOptimizerProps {
  products: Product[];
}

export default function BudgetOptimizer({ products }: BudgetOptimizerProps) {
  const [budget, setBudget] = useState<string>('');
  const [result, setResult] = useState<BestCombinationResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const budgetNumber = parseFloat(budget);

    if (isNaN(budgetNumber) || budgetNumber <= 0) {
      setError('Por favor, ingresa un presupuesto válido mayor a 0');
      return;
    }

    const combination = findBestCombination(products, budgetNumber);
    setResult(combination);
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.value);
    setError('');
  };

  return (
    <div className={styles.budgetOptimizer}>
      <div className={styles.availableProducts}>
        <h3>Productos disponibles:</h3>
        <div className={styles.productsList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <span>{product.name}</span>
              <span className={styles.productPrice}>${product.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.budgetInputSection}>
        <label htmlFor="budget">Ingresa tu presupuesto :</label>
        <div className={styles.inputGroup}>
          <input
            id="budget"
            type="number"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Ej: 150"
            min="0"
            step="0.01"
          />
          <button onClick={handleCalculate} disabled={!budget}>
            Calcular
          </button>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>

      {result && (
        <div className={styles.resultSection}>
          <h3>Combinación óptima:</h3>

          {result.products.length === 0 ? (
            <div className={styles.noCombination}>
              <p>No se pueden comprar productos dentro del presupuesto de ${budget}</p>
            </div>
          ) : (
            <>
              <div className={styles.selectedProducts}>
                {result.products.map((product) => (
                  <div key={product.id} className={styles.selectedProduct}>
                    <span>{product.name}</span>
                    <span className={styles.productPrice}>${product.price}</span>
                  </div>
                ))}
              </div>

              <div className={styles.resultSummary}>
                <div className={styles.summaryItem}>
                  <span>Precio total:</span>
                  <span className={styles.totalPrice}>${result.totalPrice}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Presupuesto restante:</span>
                  <span className={styles.remainingBudget}>${result.remainingBudget}</span>
                </div>
                <div className={styles.summaryItem}>
                  <span>Utilización del presupuesto:</span>
                  <span className={styles.utilization}>
                    {((result.totalPrice / parseFloat(budget)) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
