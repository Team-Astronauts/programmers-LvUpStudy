function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let k = Math.floor(n / a) * b;
    result += k;
    n = k + (n % a);
  }
  return result;
}
