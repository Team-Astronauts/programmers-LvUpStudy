function solution(k, score) {
  const answer = [];
  const link = [];
  score.forEach((v) => {
    link.push(v);
    link.sort((a, b) => b - a);
    if (link.length >= k) {
      answer.push(link[k - 1]);
    } else {
      answer.push(link[link.length - 1]);
    }
  });
  return answer;
}
