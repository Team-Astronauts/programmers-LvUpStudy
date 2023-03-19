function solution(board, moves) {
  let answer = 0;
  let basket = [];

  // 크레인 작동
  moves.forEach((v) => {
    for (let i = 0; i < board.length; i++) {
      let obj = board[i][v - 1];
      // 인형이 있는 경우
      if (obj !== 0) {
        // 인형 뽑은 위치 0으로 초기화
        board[i][v - 1] = 0;
        // 바구니 가장 위에 있는 인형이랑 같은 경우
        if (basket[basket.length - 1] === obj) {
          basket.pop(); // 바구니에서 인형 제거
          answer += 2; // 터져 사라진 인형 증가(한번 터지면 두개 없어지니까)
        } else {
          // 바구니 가장 위 인형이랑 다른 경우, 인형을 바구니에 추가
          basket.push(obj);
        }
        break;
      }
    }
  });
  return answer;
}
