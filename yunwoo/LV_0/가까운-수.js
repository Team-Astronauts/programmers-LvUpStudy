function solution(array, n) {
  const sortedArray = array
    .map((v) => [Math.abs(n - v), v])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return sortedArray[0][1];
}
