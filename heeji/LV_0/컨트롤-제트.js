function solution(s) {
  s = s.split(" ");
  let arr = [];
  // pop으로 직전 값 빼주기
  for (let i of s) {
    i === "Z" ? (arr.length ? arr.pop() : "") : arr.push(i);
  }
  // parseInt 또는 +를 붙여 숫자형으로 바꾸기
  return arr.reduce((a, i) => a + parseInt(i), 0);
}
