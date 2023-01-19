function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  return nums ? nums.map((num) => +num).reduce((a, c) => a + c, 0) : 0;
}

function solution2(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
