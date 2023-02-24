function solution(t, p) {
  let temp = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    temp.push(t.slice(i, p.length + i));
  }
  return temp.filter((item) => +item <= +p).length;
}
