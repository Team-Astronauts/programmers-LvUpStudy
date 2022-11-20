function solution(a, b) {
  let answer = 0;
  const maxNum = Math.max(a, b);
  const minNum = Math.min(a, b);

  for (let i = minNum; i <= maxNum; i++) {
    answer += i;
  }
  return answer;
}
