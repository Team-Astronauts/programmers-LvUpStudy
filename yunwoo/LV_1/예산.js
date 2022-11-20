function solution(d, budget) {
  let result = 0;

  d.sort((a, b) => a - b).reduce((acc, cur) => {
    if (budget >= acc + cur) {
      result++;
    }

    return acc + cur;
  }, 0);

  return result;
}
