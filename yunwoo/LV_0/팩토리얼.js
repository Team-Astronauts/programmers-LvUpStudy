function solution(n) {
  let i = 1;
  let value = 1;

  while (value <= n) {
    value += value * (i * 1);
    i++;
  }

  return i - 1;
}
