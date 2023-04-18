import { App } from '@example/index';
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

describe('example', () => {
  it('example', () => {
    render(<App />);
    const button = screen.getByText('Hello World 0');
    expect(button).toHaveTextContent('Hello World 0');
  });
});
