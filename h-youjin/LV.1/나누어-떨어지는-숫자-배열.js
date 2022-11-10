function solution(arr, divisor) {
  const divArr = arr.sort((a, b) => a - b).filter((num) => num % divisor === 0);
  return divArr.length === 0 ? [-1] : divArr;
}
