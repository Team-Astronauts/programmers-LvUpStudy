function solution(brown, yellow) {
  let answer = [];
  let total = brown + yellow;
  for (let height = 3; height <= brown; height++) {
    if (total % height === 0) {
      let width = total / height;
      if ((height - 2) * (width - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return answer;
}
