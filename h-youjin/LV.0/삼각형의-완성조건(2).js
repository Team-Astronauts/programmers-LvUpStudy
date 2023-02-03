function solution(sides) {
  const min = sides.sort((a, b) => a - b);
  return min[0] * 2 - 1;
}
