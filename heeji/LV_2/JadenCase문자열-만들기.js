function solution(s) {
  let lowS = s.toLowerCase();
  let answer = lowS
    .split(" ")
    .map((i) => {
      let arr = i.split("");
      if (arr[0] != null) {
        arr[0] = arr[0].toUpperCase();
      }
      return arr.join("");
    })
    .join(" ");
  return answer;
}
