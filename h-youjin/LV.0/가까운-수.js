function solution(array, n) {
  const absNum = Math.min(...array.map((num) => Math.abs(num - n)));
  const sortArr = array.sort((a, b) => a - b);

  return array.find((num) => Math.abs(num - n) === absNum);
}
