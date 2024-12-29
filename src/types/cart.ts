import { Product } from '@/services/product';

export interface CartItem extends Product {
  quantity: number;
  size: string;
}
