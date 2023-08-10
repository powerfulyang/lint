import { describe, expect, it } from '@jest/globals';
import eslint from '@/eslint';

describe('eslint', () => {
  it('should pass', () => {
    expect(eslint.extends).toBeDefined();
  });
});
