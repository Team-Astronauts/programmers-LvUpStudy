function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }
  return answer + "0" + [...answer].reverse().join("");
}

function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    repeat = Math.floor(food[i] / 2);
    for (let j = 0; j < repeat; j++) player1.push(i);
    for (let k = 0; k < repeat; k++) player2.unshift(i);
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}
