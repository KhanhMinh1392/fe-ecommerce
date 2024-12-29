import { Button } from '@/components/ui/button';
import { formatPrice } from '@/helpers/common';
import { useCount } from '@/hooks/useCount';
import { Product } from '@/services/product';
import { CartItem } from '@/types/cart';
import { useState } from 'react';
import Count from '../count';
import ListComponent from '../list';
import Stars from '../stars';
import { cn } from '@/lib/utils';
import { Size, Sizes } from '@/types/product';

interface ProductDetailProps {
  product: Product;
  handleAddToCart: (product: CartItem) => void;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { product, handleAddToCart } = props;

  const [previewImage, setPreviewImage] = useState(product.images[0].url ?? '');
  const [size, setSize] = useState<Size>(Sizes.SMALL);

  const { count, increment, decrement, setCount } = useCount(1);

  const handleAddItemToCart = () => {
    setCount(1);
    handleAddToCart({
      ...product,
      quantity: count,
      size,
    });
  };

  return (
    <div className="mt-9 flex">
      <div className="flex gap-3.5">
        <ul className="h-full space-y-5">
          <ListComponent
            data={product.images}
            renderItems={(item) => (
              <li key={item.id} onClick={() => setPreviewImage(item.url)} className="cursor-pointer">
                <img src={item.url} alt={item.name} className="h-[167px] w-[152px] rounded-[10px] object-cover" />
              </li>
            )}
          />
        </ul>
        <div className="h-full w-[444px]">
          <img src={previewImage} alt="avatar" className="h-full object-contain" />
        </div>
      </div>
      <div className="ml-10">
        <h1 className="text-4xl font-bold uppercase">{product.product_name}</h1>
        <Stars size={24} />
        <div className="flex items-center gap-3">
          <p className="text-3xl font-semibold">{formatPrice(product.price)}</p>
          <p className="text-3xl font-semibold text-gray-400 line-through decoration-2">
            {formatPrice(product.price / 2)}
          </p>
          <p className="rounded-full bg-red-100 px-3.5 py-1.5 text-red-600">-40%</p>
        </div>
        <span className="mt-5 inline-block">
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers
          superior comfort and style.
        </span>
        <hr className="my-6 w-full" />
        <p className="mb-4">Select Colors</p>
        <div className="flex items-center gap-4">
          <div className="size-9 rounded-full bg-stone-900"></div>
          <div className="size-9 rounded-full bg-green-900"></div>
          <div className="size-9 rounded-full bg-blue-900"></div>
        </div>
        <hr className="my-6 w-full" />
        <p>Choose Size</p>
        <div className="mt-4 space-x-3">
          <Button
            className={cn(
              'rounded-full bg-gray-200 px-6 py-3 text-gray-400',
              size === Sizes.SMALL && 'bg-gray-800 text-gray-200',
            )}
            onClick={() => setSize(Sizes.SMALL)}
          >
            Small
          </Button>
          <Button
            className={cn(
              'rounded-full bg-gray-200 px-6 py-3 text-gray-400',
              size === Sizes.MEDIUM && 'bg-gray-800 text-gray-200',
            )}
            onClick={() => setSize(Sizes.MEDIUM)}
          >
            Medium
          </Button>
          <Button
            className={cn(
              'rounded-full bg-gray-200 px-6 py-3 text-gray-400',
              size === Sizes.LARGE && 'bg-gray-800 text-gray-200',
            )}
            onClick={() => setSize(Sizes.LARGE)}
          >
            Large
          </Button>
        </div>
        <hr className="my-6 w-full" />
        <div className="flex items-center gap-5">
          <Count className="w-[170px]" count={count} handleIncrement={increment} handleDecrement={decrement} />
          <Button className="h-full w-full rounded-full bg-gray-900 py-4 text-white" onClick={handleAddItemToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
