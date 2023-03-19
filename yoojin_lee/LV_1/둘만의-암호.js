function solution(s, skip, index) {
  let ans = "";
  const regex = new RegExp(`[^${skip}]`, "g");
  const alpabet = "abcdefghijklmnopqrstuvwxyz".match(regex);

  for (let i of s) {
    const idx = alpabet.indexOf(i) + index;
    ans += alpabet[idx % alpabet.length];
  }
  return ans;
}
