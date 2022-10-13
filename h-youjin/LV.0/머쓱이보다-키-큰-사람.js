function solution(array, height) {
  let answer = 0;
  answer = array.filter((v) => v > height).length;
  return answer;
}
