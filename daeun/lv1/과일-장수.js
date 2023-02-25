function solution(k, m, score) {
  score.sort((a, b) => a - b);

  let answer = 0;

  while (score.length >= m) {
    const box = score.splice(score.length - m, m);

    answer += box[0] * m;
  }

  return answer;
}

// 내림차순 정렬과 for 문을 이용한 풀이
function solution2(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;
  let idx = m - 1;

  for (let i = 0; i < ~~(score.length / m); i++) {
    answer += score[idx] * m;
    idx += m;
  }
  return answer;
}
