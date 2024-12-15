import TShirt from '@assets/images/t-shirt.png';
import { useNavigate } from 'react-router';
export default function Card() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product');
  };

  return (
    <div className="" onClick={handleClick}>
      <img src={TShirt} alt="" width={295} height={298} className="mb-4 rounded-[1.26rem]" />
      <h6 className="mb-2 text-lg font-semibold">T-SHIRT WITH TAPE DETAILS</h6>
      <p>star</p>
      <p className="text-2xl">$120</p>
    </div>
  );
}
