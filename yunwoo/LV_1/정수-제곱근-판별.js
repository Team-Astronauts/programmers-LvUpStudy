function solution(n) {
  const squareRoot = Math.sqrt(n);

  return Number.isInteger(squareRoot)
    ? (squareRoot + 1) * (squareRoot + 1)
    : -1;
}
