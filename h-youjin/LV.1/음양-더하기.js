function solution(absolutes, signs) {
  let sum = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum.push(absolutes[i]);
    } else {
      sum.push(-absolutes[i]);
    }
  }
  return sum.reduce((acc, cur) => acc + cur);
}
