import React from 'react';
import styles from './index.module.css';

const TechExplanation = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Prueba técnica Full-Stack con Next.js
      </h2>

      <p className={styles.paragraph}>
        Esta aplicación demuestra una solución full-stack completa construida con Next.js y TypeScript:
      </p>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>🔧 Backend</h3>
        <ul className={styles.list}>
          <li>GET /api/products - Obtener catálogo de productos</li>
          <li>POST /api/cart - Agregar productos al carrito</li>
          <li>GET /api/cart - Ver contenido del carrito</li>
        </ul>

        <h3 className={styles.subtitle}>🎨 Frontend</h3>
        <ul className={styles.list}>
          <li>Listado de productos con funcionalidad de agregar al carrito</li>
          <li>Visualización del carrito de compras</li>
          <li>Herramienta que muestra la mejor combinación de productos según tu presupuesto</li>
        </ul>
      </div>

      <div className={styles.reasoning}>
        <h3 className={styles.subtitle}>📌 ¿Por qué elegí Next.js?</h3>
        <ul className={styles.list}>
          <li>
            Es un framework fullstack moderno que me permite desarrollar backend y frontend en un solo entorno.
          </li>
          <li>
            Mi elección de Next.js responde a una evaluación proporcional del desafío: no por limitación, sino porque usar un stack más complejo como Ruby on Rails habría significado introducir capas innecesarias para una solución que puede resolverse de forma más ágil.
            </li>
          <li>
            Puedo desplegar rápidamente en Vercel y mantener todo el código en un único repositorio, sin sobreingeniería.
          </li>
          <li>
            Elijo la herramienta adecuada al tamaño del problema: no por limitación, sino por profesionalismo.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TechExplanation;
