function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const map = board.map((item) => parseInt(item / 2));

  for (const key of keyinput) {
    if (key === "right") {
      x += 1;
    } else if (key === "left") {
      x -= 1;
    } else if (key === "up") {
      y += 1;
    } else {
      y -= 1;
    }

    if (Math.abs(x) > map[0]) {
      x = x > 0 ? map[0] : map[0] * -1;
    }

    if (Math.abs(y) > map[1]) {
      y = y > 0 ? map[1] : map[1] * -1;
    }
  }
  return [x, y];
}
