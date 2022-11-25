function solution(sizes) {
  const resize = [...sizes].map(([w, h]) => (w < h ? [h, w] : [w, h]));
  const maxWidth = Math.max(...resize.map((size) => size[0]));
  const maxHeight = Math.max(...resize.map((size) => size[1]));

  return maxWidth * maxHeight;
}
