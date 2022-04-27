import type { FC } from 'react';
import React, { useState } from 'react';
import { eslint } from '@/index';
import { Other } from './other';

export const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(1)}>
        Hello World {count}
      </button>
      {[1, 2].map((i) => (
        <div key={i}>
          <span>{i}</span>
          <span>{eslint.env.es2022}</span>
          <Other />
        </div>
      ))}
    </div>
  );
};
