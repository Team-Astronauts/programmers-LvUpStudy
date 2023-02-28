function solution(k, score) {
  const hallOfFame = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);

    const sorted = hallOfFame.sort((a, b) => a - b);

    if (sorted.length > k) sorted.shift();

    answer.push(sorted[0]);
  }

  return answer;
}
