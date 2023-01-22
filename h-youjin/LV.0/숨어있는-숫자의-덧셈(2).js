function solution(my_string) {
  const findNum = my_string.match(/\d+/g);
  return findNum ? findNum.map((num) => Number(num)).reduce((acc, cur) => acc + cur, 0) : 0;
}
