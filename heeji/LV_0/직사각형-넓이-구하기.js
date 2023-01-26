function solution1(dots) {
  let x = [];
  let y = [];
  for (let di of dots) {
    x.push(di[0]);
    y.push(di[1]);
  }
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

function solution2(dots) {
  const width =
    Math.max(...dots.map((i) => i[0])) - Math.min(...dots.map((i) => i[0]));
  const height =
    Math.max(...dots.map((i) => i[1])) - Math.min(...dots.map((i) => i[1]));
  return width * height;
}
