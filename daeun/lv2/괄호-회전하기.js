function solution(s) {
  if (s.length % 2 === 1) return 0;
  let answer = 0;
  const stk = [];

  for (let i = 0; i < s.length; i++) {
    let match = 1;
    let slice = s.slice(i) + s.slice(0, i);

    for (word of slice) {
      if (word === '(' || word === '{' || word === '[') {
        stk.push(word);
      } else {
        const pair = stk.pop();
        if (pair === '(' && word === ')') continue;
        if (pair === '[' && word === ']') continue;
        if (pair === '{' && word === '}') continue;
        match = 0;
        break;
      }
    }
    if (match) answer++;
  }
  return answer;
}
