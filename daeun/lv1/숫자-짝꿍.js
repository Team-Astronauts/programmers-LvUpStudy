function solution(X, Y) {
  let answer = '';
  X = [...X];
  Y = [...Y];

  for (let i = 0; i < 10; i++) {
    const curX = X.filter((v) => +v === i).length;
    const curY = Y.filter((v) => +v === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }

  const max = [...answer].reverse().join('');

  return max ? (+max ? max : '0') : '-1';
}
