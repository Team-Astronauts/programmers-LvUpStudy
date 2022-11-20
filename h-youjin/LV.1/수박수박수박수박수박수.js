function solution(n) {
  let answerStr = '';

  for (let i = 0; i < n; i++) {
    answerStr += i % 2 === 0 ? '수' : '박';
  }

  return answerStr;
}
