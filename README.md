# Redux Shopping Cart

A polished full-stack shopping cart project built with React, Vite, Material UI, Redux Toolkit, and Vercel serverless functions.

## What this project includes

- Redux Toolkit store configuration with DevTools enabled
- Cart slice with add, remove, update quantity, and clear reducers
- Cart persistence using `localStorage`
- Material UI storefront UI with product cards and a checkout drawer
- Backend API routes for `/api/products` and `/api/health`
- Vercel-ready structure for frontend + backend deployment

## Tech stack

- React 18
- Redux Toolkit 2
- React Redux
- Material UI 5
- Vite 5
- Vercel Functions

## Project structure

```text
.
├── api
│   ├── health.js
│   └── products.js
├── data
│   └── products.js
├── src
│   ├── app
│   │   ├── persistence.js
│   │   └── store.js
│   ├── components
│   ├── data
│   ├── features
│   │   └── cart
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── theme.js
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Run locally

1. Install Node.js 18 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. Open `http://localhost:5173`.

Note: during plain Vite local development, the UI falls back to built-in mock product data if `/api/products` is not available.

## Push to GitHub

```bash
git add .
git commit -m "Build Redux shopping cart app"
git push origin main
```

## Deploy to Vercel

1. Push the code to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project**.
4. Import `eshaansharma07/shoppingcart`.
5. Keep the default Vite settings and deploy.

After deployment:

- Frontend will be served by Vercel
- Backend routes will be available at `/api/products` and `/api/health`

## Redux features covered

- `configureStore()` with Redux Toolkit
- Slice-based reducer architecture
- `useDispatch()` and `useSelector()` integration
- Quantity updates and item removal
- Persistent cart state with `localStorage`
