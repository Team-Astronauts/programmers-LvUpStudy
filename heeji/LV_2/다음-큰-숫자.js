function solution(n) {
  let oneNum = n.toString(2).split("1").length;
  // n을 1씩 키우고 2진수로 바뀐 문자열에서 1의 갯수 비교한다.
  while (true) {
    n++;
    if (n.toString(2).split("1").length === oneNum) {
      return n;
    }
  }
}
