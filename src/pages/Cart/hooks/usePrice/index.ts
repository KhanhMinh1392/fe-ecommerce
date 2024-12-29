import { DELIVERY_FEE, DISCOUNT } from '@/constants/common';
import { useCartStore } from '@/stores/cart';
import { useMemo } from 'react';

export const usePrice = () => {
  const { cart } = useCartStore();

  const subTotalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const subTotalPriceWithDiscount = useMemo(() => {
    return subTotalPrice * DISCOUNT;
  }, [subTotalPrice]);

  const totalPrice = useMemo(() => {
    return subTotalPrice - subTotalPriceWithDiscount + DELIVERY_FEE;
  }, [subTotalPrice, subTotalPriceWithDiscount]);

  return { subTotalPrice, subTotalPriceWithDiscount, totalPrice };
};
