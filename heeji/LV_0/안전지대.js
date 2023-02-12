function solution(board) {
  const type = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];
  let bomb = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        type.forEach((el) => {
          let [nexti, nextj] = el;
          [nexti, nextj] = [i + nexti, j + nextj];
          if (
            nexti >= 0 &&
            nexti < board.length &&
            nextj >= 0 &&
            nextj < board[i].length
          ) {
            bomb.add(nexti + "0" + nextj);
          }
        });
      }
    }
  }
  return board.length * board[0].length - bomb.size;
}
