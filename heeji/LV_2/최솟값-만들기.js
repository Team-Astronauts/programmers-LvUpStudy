function solution(A, B) {
  let answer = [];
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  let result = answer.reduce((a, b) => a + b);
  return result;
}
