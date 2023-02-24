function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    const evenOrOdd = Number.isInteger(Math.sqrt(i));
    evenOrOdd ? (answer -= i) : (answer += i);
  }
  return answer;
}
