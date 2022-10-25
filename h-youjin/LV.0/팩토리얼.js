function solution(n) {
  let i = 1;
  let fac = 1;

  if (n === 1) return 1;

  while (fac <= n) {
    fac *= i;
    i++;
  }
  return i - 2;
}
