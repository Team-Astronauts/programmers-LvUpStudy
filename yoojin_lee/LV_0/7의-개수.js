function solution(array) {
  array = array.join("");
  // 7 기준 분리
  console.log(array.split(7));
  return array.split(7).length - 1;
}
