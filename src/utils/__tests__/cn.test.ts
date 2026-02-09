import { describe, it, expect } from 'vitest';
import { cn } from '../cn';

describe('cn utility', () => {
  it('merges tailwind classes correctly', () => {
    const result = cn('px-2 py-2', 'px-4');
    expect(result).toBe('py-2 px-4');
  });

  it('handles conditional classes', () => {
    const isTrue = true;
    const isFalse = false;
    const result = cn('base', isTrue && 'true-class', isFalse && 'false-class');
    expect(result).toBe('base true-class');
  });

  it('merges conflicting tailwind colors', () => {
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toBe('text-blue-500');
  });
});
