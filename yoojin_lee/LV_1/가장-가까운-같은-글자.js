function solution(s) {
  const arr = [];
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      answer.push(i - arr.lastIndexOf(s[i]));
    } else {
      answer.push(-1);
    }
    arr.push(s[i]);
  }
  return answer;
}
