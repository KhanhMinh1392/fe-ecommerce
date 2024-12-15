import { lazy, LazyExoticComponent } from 'react';

const HomePage = lazy(async () => await import('@pages/Home'));
const ShopPage = lazy(async () => await import('@pages/Shop'));
const ProductPage = lazy(async () => await import('@pages/Product'));
const CartPage = lazy(async () => await import('@pages/Cart'));
const NotFoundPage = lazy(async () => await import('@pages/NotFound'));

export interface IRoute {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
}

export const routes: IRoute[] = [
  { path: '/', component: HomePage },
  { path: '/shop', component: ShopPage },
  { path: '/product', component: ProductPage },
  { path: '/cart', component: CartPage },
  { path: '*', component: NotFoundPage },
];
