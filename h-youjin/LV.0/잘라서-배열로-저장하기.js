function solution(my_str, n) {
  const strArr = my_str.split('');
  const answer = [];

  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(''));
  }
  return answer;
}
