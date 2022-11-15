function solution(a, b) {
  const sortedArr = [a, b].sort((a, b) => a - b);
  let result = 0;

  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    result += i;
  }

  return result;
}
