function solution(board) {
  const n = board.length;
  const danger = JSON.parse(JSON.stringify(board));

  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!board[i][j]) continue;
      for (let k = 0; k < 8; k++) {
        const ni = i + dx[k];
        const nj = j + dy[k];

        if (ni < 0 || ni >= n || nj < 0 || nj >= n) continue;

        danger[ni][nj] = 1;
      }
    }
  }
  const cnt = danger.flat().filter((i) => i).length;
  return n * n - cnt;
}
