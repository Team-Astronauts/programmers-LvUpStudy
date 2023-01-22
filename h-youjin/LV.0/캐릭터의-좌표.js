function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const limit = board.map((item) => ~~(item / 2));

  for (const key of keyinput) {
    switch (key) {
      case 'left':
        x--;
        break;
      case 'right':
        x++;
        break;
      case 'down':
        y--;
        break;
      case 'up':
        y++;
        break;
    }

    if (Math.abs(x) > limit[0]) {
      x = x > 0 ? limit[0] : limit[0] * -1;
    }
    if (Math.abs(y) > limit[1]) {
      y = y > 0 ? limit[1] : limit[1] * -1;
    }
  }
  return [x, y];
}
