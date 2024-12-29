import { cn } from '@/lib/utils';
import { memo } from 'react';

interface CountProps {
  className?: string;
  count?: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

function Count(props: CountProps) {
  const { className, handleDecrement, handleIncrement, count } = props;

  return (
    <div className={cn('flex h-11 w-28 items-center justify-between rounded-full bg-gray-200 px-5 py-3', className)}>
      <p className="mb-0.5 cursor-pointer text-2xl" onClick={handleDecrement}>
        -
      </p>
      <p>{count}</p>
      <p className="cursor-pointer text-2xl" onClick={handleIncrement}>
        +
      </p>
    </div>
  );
}

export default memo(Count);
