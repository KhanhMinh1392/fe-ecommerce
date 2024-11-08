import { X } from 'lucide-react';
import { useState } from 'react';

export default function Banner() {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  if (isDisplay) return;
  return (
    <div className="flex bg-black px-6 py-2">
      <h1 className="mx-auto w-fit text-white">Sign up and get 20% off to your first order. Sign Up Now</h1>
      <X color="white" onClick={() => setIsDisplay(true)} />
    </div>
  );
}
