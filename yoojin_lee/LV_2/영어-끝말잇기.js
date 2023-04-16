function solution(n, words) {
  let ans = 0;
  words.reduce((prev, now, idx) => {
    ans =
      ans ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] ? idx : ans);
    return now[now.length - 1];
  }, "");
  return ans ? [(ans % n) + 1, Math.floor(ans / n) + 1] : [0, 0];
}
