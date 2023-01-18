function solution(n) {
  let result = [];
  let smallNum = 2;

  while (n >= smallNum) {
    if (n % smallNum === 0) {
      result.push(smallNum);
      n = n / smallNum;
    } else smallNum++;
  }
  return [...new Set(result)];
}
