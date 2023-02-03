function solution(n) {
  let num3x = 0;
  for (let i = 0; i < n; i++) {
    num3x++;
    while (num3x.toString().includes("3") || num3x % 3 === 0) {
      num3x++;
    }
  }
  return num3x;
}
