function solution(box, n) {
  let [width, length, height] = box;
  return parseInt(width / n) * parseInt(length / n) * parseInt(height / n);
}
