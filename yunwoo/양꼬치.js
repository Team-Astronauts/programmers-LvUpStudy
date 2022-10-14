function solution(n, k) {
  const food = 12000 * n;
  const drink = n >= 10 ? 2000 * (k - Math.floor(n / 10)) : 2000 * k;

  return food + drink;
}
