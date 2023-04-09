function solution(s) {
  let answer = 0;

  for (let braket of s) {
    braket === '(' ? answer++ : answer--;

    if (answer < 0) return false;
  }

  return !answer;
}
