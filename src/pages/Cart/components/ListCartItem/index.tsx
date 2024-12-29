import Count from '@/components/count';
import Divider from '@/components/divider';
import ListComponent from '@/components/list';
import { formatPrice } from '@/helpers/common';
import { useCartStore } from '@/stores/cart';
import { Size, Sizes } from '@/types/product';
import { Trash2 } from 'lucide-react';
import { Fragment } from 'react';

const SIZE_TITLES = {
  [Sizes.SMALL]: 'Small',
  [Sizes.MEDIUM]: 'Medium',
  [Sizes.LARGE]: 'Large',
};

export default function ListCartItem() {
  const { cart, decreaseProductQuality, increaseProductQuality, remove } = useCartStore();

  return (
    <ListComponent
      data={cart}
      renderItems={(item, index) => {
        const isNotLastItem = cart.indexOf(item) !== cart.length - 1;

        return (
          <Fragment key={index}>
            <div className="flex gap-4">
              <img src={item.images[0].url} alt={item.images[0].name} className="size-32 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="mb-0.5 text-xl font-semibold">{item.product_name}</h3>
                  <Trash2 color="red" className="cursor-pointer" onClick={() => remove(item)} />
                </div>
                <p className="text-sm">
                  Color: <span className="text-gray-500">Black</span>
                </p>
                <p className="text-sm">
                  Size: <span className="text-gray-500">{SIZE_TITLES[item.size as Size]}</span>
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-2xl font-semibold">{formatPrice(item.price * item.quantity)}</p>
                  <Count
                    count={item.quantity}
                    handleIncrement={() => increaseProductQuality(item)}
                    handleDecrement={() => decreaseProductQuality(item)}
                  />
                </div>
              </div>
            </div>
            {isNotLastItem && <Divider />}
          </Fragment>
        );
      }}
    />
  );
}
