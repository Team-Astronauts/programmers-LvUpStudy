function solution(s, skip, index) {
  let answer = "";
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  // skip 문자열의 알파벳 제거한다.
  [...skip].forEach((i) => alphabet.delete(i));
  // skip 문자열이 제거된 alphabet 배열로 만든다.
  const arr = [...alphabet];

  for (const i of s) {
    const skipIndex = arr.indexOf(i) + index;
    answer += arr[skipIndex % arr.length];
  }
  return answer;
}
