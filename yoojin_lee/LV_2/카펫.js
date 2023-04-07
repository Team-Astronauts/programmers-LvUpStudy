function solution(brown, yellow) {
  let answer = [];
  for (let i = 3; i < brown + yellow; i++) {
    let width = (brown + yellow) / i;
    if (width >= i) {
      if ((i - 2) * (width - 2) === yellow) {
        answer[0] = width;
        answer[1] = i;
        break;
      }
    }
  }
  return answer;
}
