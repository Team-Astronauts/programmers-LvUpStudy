function solution(keyinput, board) {
  let answer = [0, 0];
  for (let i of keyinput) {
    switch (i) {
      case "up":
        if (answer[1] < board[1] / 2 - 1) answer[1]++;
        break;
      case "down":
        if (-answer[1] < board[1] / 2 - 1) answer[1]--;
        break;
      case "left":
        if (-answer[0] < board[0] / 2 - 1) answer[0]--;
        break;
      case "right":
        if (answer[0] < board[0] / 2 - 1) answer[0]++;
        break;
    }
  }
  return answer;
}
