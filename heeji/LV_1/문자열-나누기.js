function solution(s) {
  let answer = 0;
  let first = "";
  let n1 = 0;
  let n2 = 0;

  for (let i of s) {
    // 첫 문자 first에 넣는다.
    if (!first) {
      first = i;
    }
    // 첫 문자와 i 같으면 n1증가. 다르면 n2증가.
    if (first === i) n1++;
    else n2++;

    // n1, n2 숫자 같아지면 answer +1, 나머지 초기화
    if (n1 === n2) {
      answer++;
      n1 = 0;
      n2 = 0;
      first = "";
    }
  }
  // first남아있으면 answer +1
  if (first) answer++;
  return answer;
}
