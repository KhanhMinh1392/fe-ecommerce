import { formatPrice } from '@/helpers/common';
import { Product } from '@/services/product';
import { useNavigate } from 'react-router';
interface CardProps {
  product: Product;
}
export default function Card(props: CardProps) {
  const { product } = props;
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="hover:cursor-pointer" onClick={() => handleClick(String(product.documentId))}>
      <img
        src={product.images[0].url}
        alt={product.images[0].name}
        width={295}
        height={298}
        className="mb-4 rounded-[1.26rem]"
        loading="lazy"
      />
      <h6 className="mb-2 text-lg font-semibold">{product.product_name}</h6>
      <p>star</p>
      <p className="text-2xl">{formatPrice(product.price)}</p>
    </div>
  );
}
