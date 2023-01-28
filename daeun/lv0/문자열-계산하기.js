function solution(my_string) {
  const s = my_string.split(" ");
  let answer = +s[0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "+") {
      answer += +s[i + 1];
    } else if (s[i] === "-") {
      answer -= +s[i + 1];
    }
  }
  return answer;
}
