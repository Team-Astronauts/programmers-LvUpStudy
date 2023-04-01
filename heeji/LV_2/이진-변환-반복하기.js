function solution(s) {
  let deleteZero = 0;
  let count = 0;
  while (s.length !== 1) {
    const origin = s.length;
    s = s
      .split("")
      .filter((v) => v === "1")
      .join("");
    const len = s.length;
    deleteZero += origin - len;
    s = len.toString(2);
    count++;
  }
  return [count, deleteZero];
}
