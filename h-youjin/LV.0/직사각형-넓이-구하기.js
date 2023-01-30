function solution(dots) {
  const sortDots = dots.sort((a, b) => a[0] - b[0]);
  const width = sortDots[2][0] - sortDots[1][0];
  const height = sortDots[1][1] - sortDots[0][1];
  return width * height;
}
