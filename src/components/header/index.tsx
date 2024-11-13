import Banner from '@components/banner';
import { CircleUser, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <Banner />
      <nav className="mx-auto flex w-fit items-center gap-10 p-6">
        <h1 className="text-4xl font-bold">SHOP.CO</h1>
        <ul className="flex items-center gap-6">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <h1 className="w-[577px]">Search</h1>
        <div className="flex items-center gap-3.5">
          <ShoppingCart />
          <CircleUser />
        </div>
      </nav>
    </header>
  );
}
