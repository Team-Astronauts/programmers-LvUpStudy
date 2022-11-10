function solution(arr, divisor) {
  const result = arr
    .filter((value) => value % divisor === 0)
    .sort((a, b) => a - b);

  return result.length === 0 ? [-1] : result;
}
