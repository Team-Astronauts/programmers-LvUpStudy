function solution(k, tangerine) {
  const obj = {};
  let count = 0;
  // 같은 크기 몇개 있는지 알아내기. 값이 있으면 1더한 값, 값이 없으면 1
  tangerine.forEach((e) => {
    obj[e] = ++obj[e] || 1;
  });
  // 귤 크기별 개수 담은 객체에서 개수 크기 큰 것부터 정렬
  const amount = Object.values(obj).sort((a, c) => c - a);
  // 개수 배열 순회하면서 count
  for (let i = 0; i < amount.length; i++) {
    count += amount[i];
    // 담으려는 귤 개수 같거나 클 경우
    if (count >= k) {
      return i ? i + 1 : 1;
    }
  }
}
