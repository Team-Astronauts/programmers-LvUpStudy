function solution(s, n) {
  const result = s.split("").map((string) => {
    let convertedString = string.charCodeAt();

    if (string === " ") return " ";

    if (getIsUpperCase(convertedString)) {
      convertedString += n;
      convertedString = diminishAscii(convertedString, 90);
    } else {
      convertedString += n;
      convertedString = diminishAscii(convertedString, 122);
    }

    return String.fromCharCode(convertedString);
  });
}

function diminishAscii(ascii, validRange) {
  if (ascii > validRange) {
    return ascii - 26;
  }
  return ascii;
}

function getIsUpperCase(ascii) {
  if (ascii >= 65 && ascii < 91) return true;
  return false;
}
