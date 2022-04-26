import type { FC } from 'react';
import React, { useState } from 'react';

export const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(1)}>
        Hello World {count}
      </button>
      {[1, 2].map((i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
};
