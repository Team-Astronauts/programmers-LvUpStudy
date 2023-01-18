function solution(box, n) {
  let answer = 1;

  box.forEach((item) => (answer *= parseInt(item / n)));

  return answer;
}
