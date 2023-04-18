import eslint from '@/eslint';
import { describe, expect, it } from "@jest/globals";

describe('eslint', () => {
  it('should pass', () => {
    expect(eslint.extends).toBeDefined();
  });
});
