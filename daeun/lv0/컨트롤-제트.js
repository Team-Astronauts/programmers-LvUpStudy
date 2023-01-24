function solution(s) {
  const S = s.split(" ");

  while (S.includes("Z")) S.splice(S.indexOf("Z") - 1, 2);

  return S.reduce((a, b) => +a + +b, 0);
}
