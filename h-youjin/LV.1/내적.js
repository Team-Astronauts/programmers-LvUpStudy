function solution(a, b) {
  return a.map((v, i) => v * b[i]).reduce((acc, cur) => acc + cur);
}
