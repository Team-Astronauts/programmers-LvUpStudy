function solution(array) {
  const maxNum = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const objConvert = Object.entries(maxNum);
  const countValue = Object.values(maxNum);

  countValue.sort((a, b) => b - a);

  if (countValue[0] === countValue[1]) return -1;

  for (const el of objConvert) {
    if (el[1] === countValue[0]) return parseInt(el[0]);
  }
}
