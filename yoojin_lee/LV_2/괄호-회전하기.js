function solution(s) {
  const list = { "}": "{", "]": "[", ")": "(" };
  const arr = s.split("");
  let result = 0;
  const isValid = (arr) => {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (list[c] === undefined) stack.push(c);
      else {
        if (stack[stack.length - 1] !== list[c]) return false;
        stack.pop();
      }
    }
    if (stack.length) return false;
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++;
    arr.push(arr.shift());
  }

  return result;
}
