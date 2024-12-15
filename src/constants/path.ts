export const ROUTE = {
  NOT_FOUND: {
    path: '*',
    to: '/notfound',
  },
  HOME: {
    path: '/',
    to: '/home',
  },
  SHOP: {
    path: '/shop',
    to: '/shop',
  },
  PRODUCT: {
    path: '/product/:productId',
    to: '/product',
  },
  CART: {
    path: '/cart',
    to: '/cart',
  },
} as const;
