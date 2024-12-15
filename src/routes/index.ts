import { ROUTE } from '@constants/path';
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
  { path: ROUTE.HOME.path, component: HomePage },
  { path: ROUTE.SHOP.path, component: ShopPage },
  { path: ROUTE.PRODUCT.path, component: ProductPage },
  { path: ROUTE.CART.path, component: CartPage },
  { path: ROUTE.NOT_FOUND.path, component: NotFoundPage },
];
