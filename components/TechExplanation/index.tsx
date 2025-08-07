import React from 'react';

const TechExplanation = () => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      background: 'white', 
      padding: '30px', 
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>
        Prueba técnica Full-Stack con Next.js
      </h2>

      <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
        Esta aplicación demuestra una solución full-stack completa construida con Next.js y TypeScript:
      </p>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '10px', color: '#374151' }}>🔧 Backend</h3>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>GET /api/products - Obtener catálogo de productos</li>
          <li>POST /api/cart - Agregar productos al carrito</li>
          <li>GET /api/cart - Ver contenido del carrito</li>
        </ul>

        <h3 style={{ marginBottom: '10px', color: '#374151' }}>🎨 Frontend</h3>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>Listado de productos con funcionalidad de agregar al carrito</li>
          <li>Visualización del carrito de compras</li>
          <li>Herramienta que muestra la mejor combinación de productos según tu presupuesto</li>
        </ul>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px', fontSize: '0.95rem', lineHeight: '1.6' }}>
        <h3 style={{ color: '#1f2937' }}>📌 ¿Por qué elegí Next.js?</h3>
        <ul style={{ marginLeft: '20px' }}>
          <li>
            Es un framework fullstack moderno que me permite desarrollar backend y frontend en un solo entorno.
          </li>
          <li>
            Dado que el desafío no requiere persistencia, concurrencia ni autenticación compleja, Next.js es más eficiente que un stack como Java.
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
