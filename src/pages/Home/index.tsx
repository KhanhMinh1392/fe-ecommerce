import { Star } from 'lucide-react';
import Thumbnail from '@/assets/images/thumbnail.png';
import { Button } from '@/components/ui/button';
import ListComponent from '@/components/list';
import Card from '@/components/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/product';
import { useMemo } from 'react';
export default function Home() {
  const params = useMemo(
    () => ({
      populate: '*',
      pagination: {
        page: 1,
        pageSize: 4,
      },
    }),
    [],
  );
  const { data: products } = useQuery({
    queryFn: () => getProducts(params),
    queryKey: ['products'],
  });
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
      <div className="container mx-auto">
        <div className="my-[72px]">
          <h4 className="mb-[55px] text-center text-6xl font-bold uppercase">New Arrivals</h4>
          <div className="mb-9 grid grid-cols-2 md:grid-cols-4 md:place-items-center">
            <ListComponent
              data={products?.data || []}
              renderItems={(product) => <Card key={product.id} product={product} />}
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Button size={'lg'} variant={'outline'} className="h-[52px] w-[218px] rounded-full">
              View All
            </Button>
          </div>
        </div>
        <hr className="h-[1px] w-full" />
        <div className="my-[72px]">
          <h4 className="mb-[55px] text-center text-6xl font-bold uppercase">Top Selling</h4>
          <div className="mb-9 grid grid-cols-2 md:grid-cols-4 md:place-items-center">
            <ListComponent
              data={products?.data || []}
              renderItems={(product) => <Card key={product.id} product={product} />}
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <Button size={'lg'} variant={'outline'} className="h-[52px] w-[218px] rounded-full">
              View All
            </Button>
          </div>
        </div>
        <div className="h-[886px] w-full rounded-3xl bg-gray-100 px-16 pt-[70px]">
          <h4 className="mb-16 text-center text-5xl font-bold uppercase">BROWSE BY dress STYLE</h4>
          <div className="mb-5 grid grid-cols-3 gap-5">
            <div className="h-[289px] rounded-2xl bg-white bg-model-one bg-center p-6">
              <h6 className="text-4xl font-semibold">Casual</h6>
            </div>
            <div className="col-span-2 h-[289px] rounded-2xl bg-white bg-model-two bg-left p-6">
              <h6 className="text-4xl font-semibold">Formal</h6>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 h-[289px] rounded-2xl bg-white bg-model-three bg-center p-6">
              <h6 className="text-4xl font-semibold">Party</h6>
            </div>
            <div className="h-[289px] rounded-2xl bg-white bg-model-four bg-left p-6">
              <h6 className="text-4xl font-semibold">Gym</h6>
            </div>
          </div>
        </div>
        <h6 className="mt-[80px] text-5xl font-semibold">OUR HAPPY CUSTOMERS</h6>
      </div>
      <div className="mt-10 flex select-none gap-5 overflow-hidden px-4">
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <div className="h-[240px] w-[400px] rounded-[20px] border px-7 py-8">
                <div className="flex items-center gap-0.5">
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                </div>
                <p className="mb-3 mt-5 text-xl font-semibold">Sarah M.</p>
                <span>
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to
                  elegant dresses, every piece I've bought has exceeded my expectations.”
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="h-[240px] w-[400px] rounded-[20px] border px-7 py-8">
                <div className="flex items-center gap-0.5">
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                </div>
                <p className="mb-3 mt-5 text-xl font-semibold">Sarah M.</p>
                <span>
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to
                  elegant dresses, every piece I've bought has exceeded my expectations.”
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="h-[240px] w-[400px] rounded-[20px] border px-7 py-8">
                <div className="flex items-center gap-0.5">
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                </div>
                <p className="mb-3 mt-5 text-xl font-semibold">Sarah M.</p>
                <span>
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to
                  elegant dresses, every piece I've bought has exceeded my expectations.”
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className="h-[240px] w-[400px] rounded-[20px] border px-7 py-8">
                <div className="flex items-center gap-0.5">
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                  <Star color="#FFC633" fill="#FFC633" />
                </div>
                <p className="mb-3 mt-5 text-xl font-semibold">Sarah M.</p>
                <span>
                  "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to
                  elegant dresses, every piece I've bought has exceeded my expectations.”
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
