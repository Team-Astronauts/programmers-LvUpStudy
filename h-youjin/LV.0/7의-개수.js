function solution(array) {
  const str = array.map((num) => num.toString()).join('');
  if (str.match(/7/g) === null) return 0;
  return str.match(/7/g).length;
}
