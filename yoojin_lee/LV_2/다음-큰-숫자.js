function solution(n) {
  // console.log(n.toString(2))
  const i = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === i) return n;
  }
}
