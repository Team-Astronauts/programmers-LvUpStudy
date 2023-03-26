function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    let doll = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][doll] !== 0) {
        if (stack[stack.length - 1] === board[j][doll]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][doll]);
        }
        board[j][doll] = 0;
        break;
      }
    }
  }
  return answer;
}
