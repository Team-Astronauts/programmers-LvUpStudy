function solution(keymap, targets) {
  let ans = [];
  let pressKey = 0;
  targets.forEach((k) => {
    for (let i = 0; i < k.length; i++) {
      let cnt = Infinity;
      keymap.forEach((j) => {
        let idx = j.indexOf(k[i]);
        if (idx > -1) {
          cnt = Math.min(cnt, idx + 1);
        }
      });
      pressKey += cnt;
    }
    ans.push(pressKey);
    pressKey = 0;
  });
  ans = ans.map((i) => {
    if (i === Infinity) {
      i = -1;
    }
    return i;
  });
  return ans;
}
