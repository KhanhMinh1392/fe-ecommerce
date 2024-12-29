import EmptyCartSVG from '@/assets/empty-cart.svg';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={EmptyCartSVG} alt="Empty Cart" className="size-64 object-cover" />
      <p className="text-2xl font-medium">Your cart is empty</p>
    </div>
  );
}
