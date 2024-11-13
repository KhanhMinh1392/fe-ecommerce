import { X } from 'lucide-react';
import { useState } from 'react';

export default function Banner() {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  if (isDisplay) return;
  return (
    <div className="flex bg-black px-6 py-2">
      <p className="w-full text-center text-sm text-white">Sign up and get 20% off to your first order. Sign Up Now</p>
      <X color="white" onClick={() => setIsDisplay(true)} />
    </div>
  );
}
