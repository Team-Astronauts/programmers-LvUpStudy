function solution(n, m, section) {
  let start = section[0];
  let ans = 1;
  section.map((i) => {
    if (start + m - 1 < i) {
      start = i;
      return ans++;
    }
  });
  return ans;
}
