import { memo, useState } from 'react';

function Count() {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex h-11 w-28 items-center justify-between rounded-full bg-gray-200 px-5 py-3">
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
