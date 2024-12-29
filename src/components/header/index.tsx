import Banner from '@/components/banner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCartStore } from '@/stores/cart';
import { CircleUser, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();

  const countStore = useCartStore((state) => state.count());

  const handleGoYourCart = () => {
    navigate('/cart');
  };

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
          <div className="relative cursor-pointer">
            <ShoppingCart onClick={handleGoYourCart} />
            <p className="absolute -right-2 -top-2 min-w-3.5 max-w-fit rounded-full bg-red-500 px-0.5 text-center text-xs text-white">
              {countStore}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUser />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
