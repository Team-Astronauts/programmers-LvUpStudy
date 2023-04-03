function solution(n) {
  let answer = 0;
  // 주어진 수의 홀수인 약수 갯수는 같다.
  // 15의 약수는 1, 3, 5, 15이며 여기서 홀수는 4개
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) {
      answer++;
    }
  }
  return answer;
}
