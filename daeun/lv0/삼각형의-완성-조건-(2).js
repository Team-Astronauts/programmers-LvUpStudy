function solution(sides) {
  return [...sides].sort((a, b) => a - b)[0] * 2 - 1;
}
