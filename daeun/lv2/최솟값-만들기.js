function solution(A, B) {
  let answer = 0;

  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortedA.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}

// reduce를 활용한 풀이
function solution2(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}
