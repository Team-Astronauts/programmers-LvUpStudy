function solution(A, B) {
  let answer = 0;

  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortedA.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}
