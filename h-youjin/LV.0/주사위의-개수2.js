function solution(box, n) {
  let [width, length, height] = box;

  return ~~(width / n) * ~~(length / n) * ~~(height / n);
}
