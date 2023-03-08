function solution(s) {
  let numbers = [
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
  let ans = s;
  for (let i = 0; i < numbers.length; i++) {
    let arr = ans.split(numbers[i]);
    ans = arr.join(i);
  }
  return parseInt(ans);
}
