function solution(dots) {
  const arr = dots.sort((a, b) => a[0] - b[0]);
  const x = arr[2][0] - arr[0][0];
  const y = arr[3][1] - arr[2][1];
  return Math.abs(x * y);
}
