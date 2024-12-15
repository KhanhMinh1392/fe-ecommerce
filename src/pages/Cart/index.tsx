import BaseballJersey from '@assets/images/baseball-jersey.webp';
import CusBreadcrumb from '@components/breadcrumb';
import Count from '@components/count';
import Divider from '@components/divider';
import { MainContainer } from '@components/layout';
import { Button } from '@components/ui/button';
import { Trash2 } from 'lucide-react';

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
  return (
    <MainContainer>
      <CusBreadcrumb breadcrumbs={breadcrumbs} />
      <h1 className="my-6 text-3xl font-bold uppercase">Your Cart</h1>
      <div className="flex gap-5">
        <div className="flex-1 rounded-2xl border px-6 py-5">
          <div className="flex gap-4">
            <img src={BaseballJersey} alt="" className="size-32 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="mb-0.5 text-xl font-semibold">Striped Baseball Jersey</h3>
                <Trash2 color="red" />
              </div>
              <p className="text-sm">
                Color: <span className="text-gray-500">Black</span>
              </p>
              <p className="text-sm">
                Size: <span className="text-gray-500">Large</span>
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-semibold">$145</p>
                <Count />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex gap-4">
            <img src={BaseballJersey} alt="" className="size-32 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="mb-0.5 text-xl font-semibold">Striped Baseball Jersey</h3>
                <Trash2 color="red" />
              </div>
              <p className="text-sm">
                Color: <span className="text-gray-500">Black</span>
              </p>
              <p className="text-sm">
                Size: <span className="text-gray-500">Large</span>
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-semibold">$145</p>
                <Count />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex gap-4">
            <img src={BaseballJersey} alt="" className="size-32 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="mb-0.5 text-xl font-semibold">Striped Baseball Jersey</h3>
                <Trash2 color="red" />
              </div>
              <p className="text-sm">
                Color: <span className="text-gray-500">Black</span>
              </p>
              <p className="text-sm">
                Size: <span className="text-gray-500">Large</span>
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-2xl font-semibold">$145</p>
                <Count />
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit w-[505px] rounded-2xl border px-6 py-5">
          <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p className="font-semibold">$565</p>
          </div>
          <div className="my-5 flex items-center justify-between">
            <p>Discount (-20%)</p>
            <p className="font-semibold text-red-500">-$113</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery Fee</p>
            <p className="font-semibold">$15</p>
          </div>
          <Divider />
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p className="font-semibold">$467</p>
          </div>
          <Button className="mt-6 h-14 w-full rounded-full py-4" size={'lg'}>
            Go to Checkout
          </Button>
        </div>
      </div>
    </MainContainer>
  );
}
