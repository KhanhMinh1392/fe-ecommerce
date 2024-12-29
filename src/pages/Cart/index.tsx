import CusBreadcrumb from '@/components/breadcrumb';
import Divider from '@/components/divider';
import { MainContainer } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/helpers/common';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/cart';
import { EmptyCart, ListCartItem } from './components';
import { usePrice } from './hooks';
import { DELIVERY_FEE, DISCOUNT } from '@/constants/common';

const breadcrumbs = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Cart',
  },
];

export default function Cart() {
  const { cart } = useCartStore();
  const { subTotalPrice, subTotalPriceWithDiscount, totalPrice } = usePrice();

  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <h1 className="my-6 text-3xl font-bold uppercase">Your Cart</h1>
      <div className="flex gap-5">
        <div className={cn('max-h-[709px] flex-1 overflow-auto rounded-2xl border px-6 py-5')}>
          {cart.length === 0 ? <EmptyCart /> : <ListCartItem />}
        </div>
        <div className="h-fit w-[505px] rounded-2xl border px-6 py-5">
          <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-semibold">{formatPrice(subTotalPrice)}</p>
          </div>
          <div className="my-5 flex items-center justify-between">
            <p>Discount ({DISCOUNT * 100}%)</p>
            <p className="font-semibold text-red-500">-{formatPrice(subTotalPriceWithDiscount)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery Fee</p>
            <p className="font-semibold">{formatPrice(DELIVERY_FEE)}</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p className="font-semibold">{formatPrice(totalPrice)}</p>
          </div>
          <Button className="mt-6 h-14 w-full rounded-full py-4" size={'lg'} disabled={cart.length === 0}>
            Go to Checkout
          </Button>
        </div>
      </div>
    </MainContainer>
  );
}
