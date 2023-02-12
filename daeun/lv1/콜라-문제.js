function solution(a, b, n) {
  let cola = 0;

  while (n >= a) {
    cola += ~~(n / a) * b;
    n = ~~(n / a) * b + (n % a);
  }
  return cola;
}
