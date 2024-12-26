import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Github, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative flex h-[500px] flex-col items-center justify-center bg-gray-100">
      <div className="flex w-[1240px] justify-between">
        <div className="w-[248px]">
          <h1 className="text-4xl font-bold">SHOP.CO</h1>
          <p className="mt-6 text-sm text-gray-500">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          <ul className="mt-8 flex items-center gap-3">
            <li className="rounded-full border border-gray-300 bg-white p-1">
              <Twitter color="black" />
            </li>
            <li className="rounded-full bg-black p-1">
              <Facebook color="white" />
            </li>
            <li className="rounded-full border border-gray-300 bg-white p-1">
              <Instagram color="black" />
            </li>
            <li className="rounded-full border border-gray-300 bg-white p-1">
              <Github color="black" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium uppercase">Company</h1>
          <ul className="mt-6 space-y-4 text-gray-500">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium uppercase">Help</h1>
          <ul className="mt-6 space-y-4 text-gray-500">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Term & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium uppercase">FAQ</h1>
          <ul className="mt-6 space-y-4 text-gray-500">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium uppercase">Resources</h1>
          <ul className="mt-6 space-y-4 text-gray-500">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="mt-[50px] w-[1240px] border-t border-t-gray-300">
        <div className="mt-6">
          <h6 className="text-sm text-gray-500">Shop.co © 2000-2023, All Rights Reserved</h6>
        </div>
      </div>
      <div className="absolute -top-24 grid w-[1240px] grid-cols-3 rounded-3xl bg-black px-16 py-9 text-white">
        <h1 className="col-span-2 w-[550px] text-[40px] font-bold leading-tight">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div>
          <Input placeholder="Enter your email address" className="h-12 rounded-3xl bg-white text-gray-900" />
          <Button
            size={'lg'}
            className="mt-3.5 w-full rounded-3xl bg-white font-medium text-gray-900 hover:bg-gray-100"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </footer>
  );
}
