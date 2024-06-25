export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  if (numbers.endsWith(',') || numbers.endsWith('\n')) {
    throw new Error('Invalid input: separator at the end');
  }

  let delimiters = /,|\n/;

  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiterString = numbers.substring(2, delimiterEndIndex);
    delimiters = new RegExp(delimiterString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  if (/,\n|\n,/.test(numbers)) {
    throw new Error('Invalid input: consecutive separators');
  }

  const numArray = numbers.split(delimiters).map(Number);

  if (numArray.some(isNaN)) {
    throw new Error('Invalid input: contains NaN');
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
