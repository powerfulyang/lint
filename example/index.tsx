import type { FC } from 'react';

export const App: FC = () => (
  <div>
    <h1>Hello World</h1>
    {[1, 2].map((i) => (
      <div key={i}>{i}</div>
    ))}
  </div>
);
