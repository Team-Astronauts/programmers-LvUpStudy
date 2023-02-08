const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function solution(board) {
  const length = board.length;
  const copy = JSON.parse(JSON.stringify(board));
  console.log(copy);

  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (!board[x][y]) continue;

      for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx >= length || ny < 0 || ny >= length)
          continue;
        copy[nx][ny] = 1;
      }
    }
  }
  return length * length - copy.flat().filter((i) => i).length;
}
