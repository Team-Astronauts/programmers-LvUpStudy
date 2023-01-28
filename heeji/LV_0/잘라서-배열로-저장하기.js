function solution(my_str, n) {
  let newArr = my_str.split("");
  let answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(newArr.slice(i, i + n).join(""));
  }
  return answer;
}
