function solution(k, tangerine) {
  const result = tangerine.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});

  const kind = Object.values(result).sort((a, b) => b - a);

  let answer = 0;

  for (const num of kind) {
    answer++;

    if (k > num) {
      k -= num;
    } else {
      break;
    }
  }

  return answer;
}
