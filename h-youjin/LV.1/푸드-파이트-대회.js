function solution(food) {
  const foodArr = food.map((num) => ~~(num / 2));
  let answer = [];
  let halfArr = [];

  foodArr.reduce((acc, cur, idx) => {
    for (let i = 0; i < cur; i++) {
      halfArr.push(idx);
    }
  });
  answer = [...halfArr, 0, ...halfArr.reverse()];
  return answer.join('');
}
