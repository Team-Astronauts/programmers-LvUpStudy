function solution(d, budget) {
  let answer = 0;
  const sortD = Array.from(d).sort((a, b) => a - b);

  for (let i = 0; i < sortD.length; i++) {
    budget -= sortD[i];
    if (budget < 0) break;
    answer++;
  }
  return answer;
}
