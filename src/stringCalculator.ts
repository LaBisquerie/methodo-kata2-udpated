export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  if (numbers.endsWith(',') || numbers.endsWith('\n')) {
    throw new Error('Invalid input: separator at the end');
  }

  let delimiters = /,|\n/;
  let customDelimiter: string | null = null;

  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiterString = numbers.substring(2, delimiterEndIndex);
    delimiters = new RegExp(delimiterString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    customDelimiter = delimiterString;
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  if (/,\n|\n,/.test(numbers)) {
    throw new Error('Invalid input: consecutive separators');
  }

  if (customDelimiter) {
    for (let i = 0; i < numbers.length; i++) {
      const currentChar = numbers[i];
      const previousChar = numbers[i - 1];

      if (currentChar === ',' || currentChar === '\n') {
        if (previousChar && previousChar !== customDelimiter) {
          throw new Error(`'${customDelimiter}' expected but '${currentChar}' found at position ${i}.`);
        }
      }
    }
  }

  const numArray = numbers.split(delimiters).map(Number);

  if (numArray.some(isNaN)) {
    throw new Error('Invalid input: contains NaN');
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
