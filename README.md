# KnifeZone - E-commerce React (Entrega final)

## Tecnologías
- React (Vite)
- React Router
- Context API (Carrito)
- Firebase Firestore
- CSS (tema neón: negro / amarillo / cian)

## Scripts
- `npm install`
- `npm run dev`

## Funcionalidades
- Listado dinámico de productos (desde Firestore / mock)
- Detalle de producto
- ItemCount con validación por stock
- Carrito con Context (add, remove, clear)
- Checkout que genera orden en Firestore (devuelve id)
- Loader y mensajes condicionales

## Configuración Firebase
Crear `.env.local` con las variables VITE_FIREBASE_...

## Autor
Tomás

archivo .env.local:
VITE_FIREBASE_API_KEY=AIzaSyAlZmmlQQSGspswHEFuf0XWinqiaG2sPyM VITE_FIREBASE_AUTH_DOMAIN=knifezone-ecommerce.firebaseapp.com VITE_FIREBASE_PROJECT_ID=knifezone-ecommerce VITE_FIREBASE_STORAGE_BUCKET=knifezone-ecommerce.firebasestorage.app VITE_FIREBASE_MESSAGING_SENDER_ID=654605535770 VITE_FIREBASE_APP_ID=1:654605535770:web:d31285b2d0dbb2eba49fa3