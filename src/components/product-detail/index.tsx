import { Button } from '@/components/ui/button';
import { Product } from '@/services/product';
import { Star } from 'lucide-react';
import ListComponent from '../list';
import { useState } from 'react';
import { formatPrice } from '@/helpers/common';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail(props: ProductDetailProps) {
  const { product } = props;

  const [previewImage, setPreviewImage] = useState(product.images[0].url ?? '');

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
        <div className="my-4 flex items-center gap-0.5">
          <Star color="#FFC633" fill="#FFC633" />
          <Star color="#FFC633" fill="#FFC633" />
          <Star color="#FFC633" fill="#FFC633" />
          <Star color="#FFC633" fill="#FFC633" />
          <Star color="#FFC633" fill="#FFC633" />
        </div>
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
          <Button className="rounded-full bg-gray-200 px-6 py-3 text-gray-400">Small</Button>
          <Button className="rounded-full bg-gray-200 px-6 py-3 text-gray-400">Medium</Button>
          <Button className="rounded-full bg-gray-200 px-6 py-3 text-gray-400">Large</Button>
        </div>
        <hr className="my-6 w-full" />
        <div className="flex items-center gap-5">
          <div className="flex w-[170px] items-center justify-between rounded-full bg-gray-100 px-5 py-2">
            <p className="text-3xl">-</p>
            <p className="text-xl">1</p>
            <p className="text-3xl">+</p>
          </div>
          <Button className="h-full w-full rounded-full bg-gray-900 py-4 text-white">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
