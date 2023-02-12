const calc = (dots1, dots2) => {
  return (dots2[1] - dots1[1]) / (dots2[0] - dots1[0]);
};

const solution = (dots) => {
  if (calc(dots[0], dots[1]) === calc(dots[2], dots[3])) return 1;
  if (calc(dots[0], dots[2]) === calc(dots[1], dots[3])) return 1;
  if (calc(dots[0], dots[3]) === calc(dots[1], dots[2])) return 1;

  return 0;
};
