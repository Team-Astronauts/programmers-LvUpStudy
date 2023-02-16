function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let applenum = m - 1;
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    answer += score[applenum] * m;
    applenum += m;
  }
  return answer;
}
