function solution(s) {
  const wordArr = [
    /zero/gi,
    /one/gi,
    /two/gi,
    /three/gi,
    /four/gi,
    /five/gi,
    /six/gi,
    /seven/gi,
    /eight/gi,
    /nine/gi,
  ];

  for (let i = 0; i < wordArr.length; i++) {
    let replaceStr = s.replace(wordArr[i], i);
    s = replaceStr;
  }
  return +s;
}
