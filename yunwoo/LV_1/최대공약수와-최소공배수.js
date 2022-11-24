function solution(n, m) {
  return [
    maxAcommonDivisor(n, m),
    minAcommonMultiple(n, m, maxAcommonDivisor(n, m)),
  ];
}

function minAcommonMultiple(a, b, maxAcommonDivisor) {
  return (a * b) / maxAcommonDivisor;
}

function maxAcommonDivisor(a, b) {
  let remainder = 0;

  while (b !== 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}
