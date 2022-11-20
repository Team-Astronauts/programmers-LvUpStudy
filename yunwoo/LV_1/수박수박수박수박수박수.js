function solution(n) {
  const repeatString = "수박".repeat(n / 2);

  return n % 2 === 0 ? repeatString : repeatString + "수";
}
