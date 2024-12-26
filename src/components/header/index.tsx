import Banner from '@/components/banner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUser, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();

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
          <ShoppingCart onClick={handleGoYourCart} />
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
