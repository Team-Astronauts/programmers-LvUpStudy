function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);

  const x = dots[0][0] - dots[2][0];
  const y = dots[0][1] - dots[1][1];

  return Math.abs(x * y);
}
