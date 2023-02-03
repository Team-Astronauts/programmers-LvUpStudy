function solution(numlist, n) {
  numlist.sort((a, b) => {
    let g1 = Math.abs(a - n);
    let g2 = Math.abs(b - n);
    if (g1 == g2) {
      return a < b ? 1 : -1;
    }
    return g1 - g2; // 오름차순 정렬
  });
  return numlist;
}
