export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  if (/,\n|\n,/.test(numbers)) {
    throw new Error('Invalid input: consecutive separators');
  }

  const numArray = numbers.split(/[\n,]/);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
