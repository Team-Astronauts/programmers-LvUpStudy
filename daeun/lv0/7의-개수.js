function solution(array) {
  return array
    .join("")
    .split("")
    .filter((item) => item === "7").length;
}

function solution2(array) {
  return array.join("").split("7").length - 1;
}
