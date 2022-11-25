function solution(sizes){
  // 각각 큰 값
  // 풀이 1
  sizes.forEach(el => el.sort((a, b) => a - b));
  const width = Math.max(...sizes.map(el => el[0]));
  const height = Math.max(...sizes.map(al => al[1]));
  return width * height;

  // 풀이 2
  // const side1 = Math.max(...sizes.map(el => Math.min(...el)));
  // const side2 = Math.max(...sizes.map(el => Math.max(...el)));
  // return side1 * side2;
  }