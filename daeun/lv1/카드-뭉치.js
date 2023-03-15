function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (let word of goal) {
    if (cards1[i] === word) {
      i++;
    } else if (cards2[j] === word) {
      j++;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}
