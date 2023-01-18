function solution(s, n) {
  return s
    .split("")
    .map(el => {
      if (el === " ") return " ";
      const ascii = el.charCodeAt();
      if ((ascii + n > 90 && ascii <= 90) || ascii + n > 122){
        return String.fromCharCode(ascii + n - 26);
      } else {
        return String.fromCharCode(ascii + n);
      }
    })
    .join("");
}
// 문자열 -> 아스키코드 : s.charCodeAt()
// 아스키코드 -> 문자열 : String.fromCharCode()