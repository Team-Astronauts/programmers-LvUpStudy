function solution(s) {
  const pair = { ")": "(", "}": "{", "]": "[" };
  let answer = 0;
  s = s.split("");

  function check(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      let v = s[i];
      if (pair[v] === undefined) stack.push(v);
      else {
        if (pair[v] === stack[stack.length - 1]) stack.pop();
        else return false;
      }
    }
    if (stack.length) return false;
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (check(s)) answer++;
    s.push(s.shift());
  }
  return answer;
}
