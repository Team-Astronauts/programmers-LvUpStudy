function solution(n) {
  return Math.sqrt(n) > 0 && Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
