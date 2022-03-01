import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const App: FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <button type="button" onClick={() => setCount(1)}>
        Hello World
      </button>
      {[1, 2].map((i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
};
