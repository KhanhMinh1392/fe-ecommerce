import Banner from '@components/banner';
import { CircleUser, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <header>
      <Banner />
      <nav className="mx-auto flex w-fit items-center gap-10 p-6">
        <NavLink className="text-4xl font-bold" to="/">
          SHOP.CO
        </NavLink>
        <ul className="flex items-center gap-6">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/sale">On Sale</NavLink>
          <NavLink to="/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/brands">Brands</NavLink>
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
