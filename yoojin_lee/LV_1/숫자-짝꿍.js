function solution(X, Y) {
  let countX = new Array(10).fill(0);
  let countY = new Array(10).fill(0);
  const arrX = [...X];
  const arrY = [...Y];
  arrX.forEach((i) => countX[i]++);
  arrY.forEach((i) => countY[i]++);

  let answer = [];
  countX.forEach((item, idx) => {
    if (item !== 0 && countY[idx] !== 0) {
      const min = Math.min(item, countY[idx]);
      answer.push(String(idx).repeat(min));
    }
  });
  if (answer.length === 0) return "-1";
  if (Number(answer.join("")) == 0) return "0";
  return answer.reverse().join("");
}
