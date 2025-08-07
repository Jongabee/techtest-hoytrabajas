# TechTest App – Aplicación Full-Stack con Next.js

Una aplicación full-stack desarrollada con Next.js y TypeScript que demuestra el desarrollo de una API REST, diseño de interfaz de usuario y resolución algorítmica de problemas.

## 🚀 Funcionalidades

### 🔧 Backend – API REST
- **GET /api/products** – Devuelve una lista estática de productos.
- **POST /api/cart** – Agrega productos al carrito con validación.
- **GET /api/cart** – Retorna el contenido actual del carrito.
- Almacenamiento en memoria para el carrito (sin persistencia en entornos serverless).
- Manejo de errores e input validation detallados.
- Interfaces TypeScript para garantizar seguridad de tipos.

### 🎨 Interfaz Frontend
- **Página de Productos** – Catálogo de productos con botón "Agregar al carrito".
- **Página del Carrito** – Vista y gestión del contenido del carrito.
- **Optimizador de Presupuesto** – Encuentra combinaciones de productos que maximizan el valor sin exceder un presupuesto.
- Diseño responsive que funciona en todos los dispositivos.
- UI moderna y clara, con estados de carga y manejo de errores.
- Arquitectura basada en componentes y separación de responsabilidades.

### 🧠 Lógica Algorítmica
- Solución mediante programación dinámica al problema de la mochila (*knapsack*).
- Encuentra la mejor combinación de productos según el presupuesto.
- Complejidad temporal O(n × presupuesto), garantizando solución óptima.
- Cálculo en tiempo real con validación de entrada.

## 📁 Estructura del Proyecto

```
├── components/
│   ├── BudgetOptimizer/     # Componente de optimización de presupuesto
│   ├── CartView/            # Vista del carrito de compras
│   ├── Navigation/          # Navegación del sitio
│   └── ProductList/         # Catálogo de productos
├── lib/
│   ├── cart.ts              # Lógica del carrito
│   ├── data.ts              # Datos estáticos de productos
│   ├── findBestCombination.ts # Algoritmo knapsack
│   └── types.ts             # Definiciones de tipos TypeScript
├── pages/
│   ├── api/
│   │   ├── cart/index.ts    # Endpoints del carrito
│   │   └── products.ts      # Endpoint de productos
│   ├── _app.tsx             # Componente raíz con navegación
│   ├── cart.tsx             # Página del carrito
│   ├── combinacion.tsx      # Página del optimizador
│   ├── index.tsx            # Página de inicio
│   └── products.tsx         # Página de productos
└── styles/
    └── globals.css          # Estilos globales
```

## 🛠️ Instalación y Ejecución

### Requisitos
- Node.js 18 o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd techtest-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   [http://localhost:3000](http://localhost:3000)

## 🏗️ Decisiones Técnicas y Arquitectura

### Backend
- **API Routes**: Rutas API de Next.js para funcionalidad backend serverless.
- **Almacenamiento en memoria**: Se documentan las limitaciones en entornos sin estado.
- **Validación de entrada**: Validación rigurosa de todas las entradas.
- **Manejo de errores**: Respuestas estructuradas con códigos HTTP apropiados.

### Frontend
- **Arquitectura por componentes**: Cada componente en carpeta propia con su CSS.
- **Gestión de estado**: Hooks de React; no se usa gestión global.
- **Consumo de API**: `fetch` para comunicación cliente-servidor.
- **Diseño responsive**: Enfoque mobile-first con CSS Grid y Flexbox.

### Algoritmo
- **Programación dinámica**: Resolución óptima al problema de la mochila.
- **Complejidad temporal**: O(n × presupuesto).
- **Complejidad espacial**: O(n × presupuesto).
- **Reconstrucción**: Vía *backtracking* desde la tabla de DP.

## 🔍 Explicación de Funcionalidades Clave

### Gestión del Carrito
Carrito basado en memoria con las siguientes consideraciones:
- **Entorno serverless**: Los datos no persisten entre llamadas.
- **Alternativa productiva**: Reemplazable por base de datos o almacenamiento externo.
- **Validación**: Se verifica que el producto exista antes de agregarlo.
- **Cantidad**: Se permite agregar múltiples veces un mismo producto.

### Algoritmo de Optimización de Presupuesto
```typescript
// Versión simplificada del algoritmo
function findBestCombination(products: Product[], budget: number): BestCombinationResult {
  // Algoritmo de programación dinámica
  // Construye soluciones óptimas parciales
  // Retorna la mejor combinación sin exceder el presupuesto
}
```

### Diseño Responsive
- **Mobile-First**: Prioridad al diseño móvil.
- **Breakpoints**: Ajustes para tablets y escritorio.
- **Grid Layouts**: Distribución con CSS Grid.
- **Navegación flexible**: Menú adaptable para móvil.

## 🚀 Despliegue

### Despliegue en Vercel (Recomendado)
1. Subir el repositorio a GitHub.
2. Conectarlo a Vercel.
3. Desplegar automáticamente sin configuración adicional.

### Despliegue manual
```bash
npm run build
npm start
```

## 🧪 Pruebas

### Prueba de Endpoints
```bash
# Probar productos
curl http://localhost:3000/api/products

# Agregar al carrito
curl -X POST http://localhost:3000/api/cart   -H "Content-Type: application/json"   -d '{"productId": 1}'

# Ver contenido del carrito
curl http://localhost:3000/api/cart
```

### Prueba del Frontend
1. Ir a la página de productos y agregar elementos al carrito.
2. Revisar la página del carrito para ver los productos agregados.
3. Usar el optimizador con distintos presupuestos.
4. Probar diseño responsive en distintos tamaños de pantalla.

## 📝 Notas de Desarrollo

### Calidad del Código
- **TypeScript**: Tipado estricto en toda la app.
- **ESLint**: Linter para mantener consistencia.
- **Comentarios**: Código bien documentado.
- **Separación de responsabilidades**: Lógica y presentación separadas.

### Rendimiento
- **SSR**: Renderizado del lado del servidor para mejor SEO.
- **Code Splitting**: Divisiones automáticas por Next.js.
- **Optimización de imágenes**: Uso del componente `Image` de Next.js.
- **Organización de estilos**: Archivos CSS por componente.

### Seguridad
- **Validación de entradas**: Validaciones robustas.
- **Manejo de errores**: No se exponen datos sensibles.
- **CORS**: Configurado correctamente para rutas API.
- **XSS**: Prevención automática de React.

## 🔮 Mejoras Futuras

- **Base de datos**: Persistencia real del carrito.
- **Autenticación**: Cuentas de usuario y carritos personalizados.
- **Pagos**: Checkout y procesamiento de pagos.
- **Filtros**: Búsqueda y filtrado de productos.
- **Tests unitarios**: Test suite con Jest y React Testing Library.
- **Monitoreo**: Analítica y tracking de rendimiento.

## 📚 Tecnologías Utilizadas

- **Next.js 14** – Framework React con App Router.
- **TypeScript** – JavaScript tipado.
- **React 18** – Librería UI con hooks.
- **CSS3** – Estilado moderno con Grid y Flexbox.
- **Node.js** – Entorno de ejecución.

## 🤝 Contribuciones

1. Haz un fork del repositorio.
2. Crea una rama nueva.
3. Realiza tus cambios.
4. Agrega tests si es necesario.
5. Abre un pull request.

## 📄 Licencia

Este proyecto fue creado exclusivamente para fines de evaluación técnica.# techtest-hoytrabajas
