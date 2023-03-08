function solution(s) {
  let word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  for (let i = 0; i < word.length; i++) {
    let engword = answer.split(word[i]);
    answer = engword.join(i);
  }
  return Number(answer);
}
