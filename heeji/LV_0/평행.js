function solution(dots) {
  let dis = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const gradient = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);
      if (dis.includes(gradient)) return 1;
      dis.push(gradient);
    }
  }
  return 0;
}
