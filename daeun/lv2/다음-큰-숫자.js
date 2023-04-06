function solution(n) {
  let binaryN = n.toString(2).split('1').length;

  while (true) {
    n++;
    if (n.toString(2).split('1').length === binaryN) return n;
  }
}
