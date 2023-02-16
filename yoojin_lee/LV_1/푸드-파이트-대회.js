function solution(food) {
  let halfArr = [];
  food.forEach((item, idx) => {
    if (item >= 2) {
      const halfItem = Math.floor(item / 2);
      halfArr.push(String(idx).repeat(halfItem));
    }
  });
  return [halfArr.join(""), 0, halfArr.reverse().join("")].join("");
}
