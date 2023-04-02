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

// chartAt(0) : 입력한 글자의 1번째 문자
// substring(1) : 문자열 자르기. 반환 문자열의 시작 인덱스. index 1부터 끝까지의 문자열 return
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
