import { useState } from 'react';

export const useCount = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, setCount, increment, decrement };
};
