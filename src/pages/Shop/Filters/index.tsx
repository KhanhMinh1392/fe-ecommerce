import Divider from '@components/divider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@components/ui/accordion';
import { Button } from '@components/ui/button';
import { Slider } from '@components/ui/slider';
import { SlidersVertical } from 'lucide-react';

export default function Filters() {
  return (
    <div className="h-[1220px] w-72 rounded-2xl border px-6 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Filters</h1>
        <SlidersVertical />
      </div>
      <Divider />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="uppercase">Tops</AccordionTrigger>
          <AccordionContent>T-Shirts & Polo Shirts</AccordionContent>
          <AccordionContent>Shirts</AccordionContent>
          <AccordionContent>Sweaters & Cardigans</AccordionContent>
          <AccordionContent>Sweatshirt & Hoodies</AccordionContent>
          <AccordionContent>Outerwear</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="uppercase">Bottom</AccordionTrigger>
          <AccordionContent>Shorts</AccordionContent>
          <AccordionContent>Dresses & Skirts</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="uppercase">Bags</AccordionTrigger>
          <AccordionContent>Backpacks</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Divider />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="prices">
          <AccordionTrigger className="uppercase">Prices</AccordionTrigger>
          <AccordionContent>
            <Slider defaultValue={[33]} max={100} step={1} />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">$0</p>
              <p className="text-sm text-gray-400">$1M</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Divider />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="prices">
          <AccordionTrigger className="uppercase">Colors</AccordionTrigger>
          <AccordionContent className="grid grid-cols-5 gap-3.5">
            <div className="size-9 rounded-full bg-green-600"></div>
            <div className="size-9 rounded-full bg-red-600"></div>
            <div className="size-9 rounded-full bg-yellow-600"></div>
            <div className="size-9 rounded-full bg-orange-600"></div>
            <div className="size-9 rounded-full bg-blue-600"></div>
            <div className="size-9 rounded-full bg-purple-600"></div>
            <div className="size-9 rounded-full bg-gray-600"></div>
            <div className="size-9 rounded-full bg-pink-600"></div>
            <div className="size-9 rounded-full bg-cyan-600"></div>
            <div className="size-9 rounded-full border bg-white"></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Divider />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="prices">
          <AccordionTrigger className="uppercase">Sizes</AccordionTrigger>
          <AccordionContent className="flex flex-wrap gap-2">
            <Button className="rounded-full bg-gray-200 text-gray-400">Small</Button>
            <Button className="rounded-full bg-gray-200 text-gray-400">Medium</Button>
            <Button className="rounded-full bg-gray-200 text-gray-400">Large</Button>
            <Button className="rounded-full bg-gray-200 text-gray-400">X-Large</Button>
            <Button className="rounded-full bg-gray-200 text-gray-400">XX-Large</Button>
            <Button className="rounded-full bg-gray-200 text-gray-400">3XL-Large</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button className="mt-6 h-12 w-full rounded-full">Apply Filter</Button>
    </div>
  );
}
