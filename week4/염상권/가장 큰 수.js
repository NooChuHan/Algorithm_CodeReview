function solution(numbers) {
  return numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('')
    .replace(/^0+/, '0');
}
