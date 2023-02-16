function solution(s) {
  let array = [];
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (!array.includes(s[i])) {
      answer.push(-1);
      array.push(s[i]);
      continue;
    }
    if (array.includes(s[i])) {
      answer.push(array.length - array.lastIndexOf(s[i]));
      array.push(s[i]);
      continue;
    }
  }
  return answer;
}

function solution(s) {
  const array = {};
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (array[s[i]] === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - array[s[i]]);
    }
    array[s[i]] = i;
  }
  return answer;
}
