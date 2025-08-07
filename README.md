# TechTest – Aplicación Full-Stack con Next.js

Una aplicación full-stack desarrollada con Next.js y TypeScript , diseño de interfaz de usuario y resolución algorítmica de problemas.

## 🚀 Funcionalidades

### 🔧 Backend 
- **GET /api/products** – Devuelve una lista estática de productos.
- **POST /api/cart** – Agrega productos al carrito con validación.
- **GET /api/cart** – Retorna el contenido actual del carrito.
- Almacenamiento en memoria para el carrito.

### 🎨 Frontend
- **Página de Productos** – Catálogo de productos con botón "Agregar al carrito".
- **Página del Carrito** – Vista y gestión del contenido del carrito.
- **Optimizador de Presupuesto** – Encuentra combinaciones de productos que maximizan el valor sin exceder un presupuesto.
- Diseño responsive
- UI moderna y clara, con estados de carga y manejo de errores.
- Arquitectura basada en componentes y separación de responsabilidades.

### 🧠 Lógica Algorítmica
- Encuentra la mejor combinación de productos según el presupuesto.

## 🛠️ Instalación y Ejecución

### Requisitos
- Node.js 18 o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Jongabee/techtest-hoytrabajas.git
   cd techtest-hoytrabajas
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
- **API Routes**: Rutas API de Next.js para funcionalidad backend.
- **Almacenamiento en memoria**: Se documentan las limitaciones en entornos sin estado.
- **Validación de entrada**: Validación rigurosa de todas las entradas.
- **Manejo de errores**: Respuestas estructuradas con códigos HTTP apropiados.

### Frontend
- **Arquitectura por componentes**: Cada componente en carpeta propia con su CSS.
- **Diseño responsive**: Enfoque mobile-first con CSS Grid y Flexbox.

## 🔍 Explicación de Funcionalidades Clave

### Gestión del Carrito
Carrito basado en memoria con las siguientes consideraciones:
- Los datos no persisten entre llamadas.
- Se permite agregar múltiples veces un mismo producto.

### Despliegue en Vercel 

## 📝 Notas de Desarrollo

### Calidad del Código
- **TypeScript**: Tipado en toda la app.
- **Separación de responsabilidades**: Lógica y presentación separadas.

## 📚 Tecnologías Utilizadas

- **Next.js 14** 
- **TypeScript** 
- **React 18** 
- **Node.js**