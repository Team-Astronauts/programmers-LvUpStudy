function solution(k, tangerine) {
  let obj = {};
  let cnt = 0;
  tangerine.forEach((i) => {
    obj[i] = ++obj[i] || 1;
  });

  const values = Object.values(obj).sort((a, b) => b - a);

  for (let i = 0; i < values.length; i++) {
    cnt += values[i];
    if (cnt >= k) {
      return i ? i + 1 : 1;
    }
  }
}
