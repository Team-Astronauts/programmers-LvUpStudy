function solution(i, j, k) {
  let result = 0;

  for (let num = i; num <= j; num++) {
    result += num
      .toString()
      .split("")
      .filter((v) => parseInt(v) === k).length;
  }

  return result;
}
