import { add } from "../stringCalculator";

describe('stringCalculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('should handle an unknown number of arguments', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('should handle newlines as separators', () => {
    expect(add('1\n2,3')).toBe(6);
  });
});