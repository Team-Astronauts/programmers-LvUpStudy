function solution(keymap, targets) {
  let answer = [];
  // 키의 최솟값 담을 map
  const map = new Map();
  // 각 키의 최솟값 비교
  keymap.forEach((keys) => {
    for (let i = 0; i < keys.length; i++) {
      map.has(keys[i])
        ? map.set(keys[i], Math.min(map.get(keys[i]), i + 1))
        : map.set(keys[i], i + 1);
    }
  });
  // 목표값 작성 가능 여부
  targets.forEach((target) => {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      // 작성 가능하면 더한다.
      if (map.has(target[i])) {
        sum += map.get(target[i]);
        // 작성 불가능하면 -1
      } else {
        sum = -1;
        break;
      }
    }
    answer.push(sum);
  });

  return answer;
}
