function solution(s) {
  s = [...s];
  let countX = 0;
  let countNotX = 0;
  let idx = 0;

  const answer = [];
  let temp = '';

  for (let i = 0; i < s.length; i++) {
    let x = s[i];

    if (temp.length === 0 || temp[idx] === x) {
      temp += s[i];
      countX++;
    } else if (temp[idx] !== x) {
      temp += s[i];
      countNotX++;
    }

    if (countX === countNotX || i === s.length - 1) {
      answer.push(temp);

      idx = 0;
      countX = 0;
      countNotX = 0;
      temp = '';
    }
  }

  return answer.length;
}
