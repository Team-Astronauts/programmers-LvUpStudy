function solution(my_string) {
  const num = my_string.match(/\d+/g);
  return !num ? 0 : num.reduce((a, b) => +a + +b, 0);
}
