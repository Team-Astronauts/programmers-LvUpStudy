function solution(board, moves) {
  let arr = [];
  let cnt = 0;
  moves.forEach((item) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][item - 1] !== 0) {
        let data = arr.pop();
        if (data !== board[i][item - 1]) {
          if (data) {
            arr.push(data);
          }
          arr.push(board[i][item - 1]);
        } else {
          cnt++;
        }
        board[i][item - 1] = 0;
        return;
      }
    }
  });
  return cnt * 2;
}
