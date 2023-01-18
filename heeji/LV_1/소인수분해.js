function solution(n) {
  let result = [];
  let i = 2;

  while (n >= i) {
    if (n % i === 0) {
      result.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return [...new Set(result)];
}
