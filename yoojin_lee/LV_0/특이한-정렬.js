function solution(numlist, n) {
  let arr = [];
  let answer = [];
  numlist.map((i) => {
    arr.push([Math.abs(i - n), i]);
  });
  // 1번째 요소 오름차순, 2번째 요소 내림차순
  arr.sort((prev, cur) => {
    if (prev[0] > cur[0]) return 1;
    if (prev[0] < cur[0]) return -1;
    if (prev[1] < cur[1]) return 1;
    if (prev[1] > cur[1]) return -1;
  });
  arr.map((i) => answer.push(i[1]));
  return answer;
}
