import { Button } from '@components/ui/button';
import Thumbnail from '../../assets/images/thumbnail.png';
export default function Home() {
  return (
    <>
      <aside className="relative">
        <img src={Thumbnail} alt="thumbnail" className="h-auto w-full object-cover" />
        <div className="absolute left-36 top-[10%]">
          <h1 className="w-[577px] text-[4.6rem] font-bold leading-none">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="my-8 w-[544px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality
            and cater to your sense of style.
          </p>
          <Button className="h-[52px] w-[210px] rounded-full py-4">Shop Now</Button>
          <ul className="mt-12 flex items-center gap-8">
            <li>
              <p className="text-[40px] font-bold">200+</p>
              <span>International Brands</span>
            </li>
            <hr className="h-16 w-[1px] bg-gray-300" />
            <li>
              <p className="text-[40px] font-bold">2,000+</p>
              <span>High-Quality Products</span>
            </li>
            <hr className="h-16 w-[1px] bg-gray-300" />
            <li>
              <p className="text-[40px] font-bold">30,000+</p>
              <span>Happy Customers</span>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex h-[122px] justify-center bg-black text-white">
        <ul className="flex w-full items-center justify-around text-5xl">
          <li>VERSACE</li>
          <li>ZARA</li>
          <li>GUCCI</li>
          <li>PRADA</li>
          <li>CALVIN KLEIN</li>
        </ul>
      </div>
    </>
  );
}
