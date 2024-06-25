export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }
  const numArray = numbers.split(',');
  if (numArray.length === 1) {
    return parseInt(numbers);
  }
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
