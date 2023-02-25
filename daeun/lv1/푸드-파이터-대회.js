function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(~~(food[i] / 2));
  }

  const reversed = [...answer].reverse().join('');

  return `${answer}0${reversed}`;
}
