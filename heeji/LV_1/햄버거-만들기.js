function solution(ingredient) {
  let stack = [];
  let answer = 0;
  ingredient.forEach((item) => {
    stack.push(item);
    if (stack.length >= 4) {
      const hamburger = stack.slice(-4).join("");

      if (hamburger === "1231") {
        stack.splice(-4);
        answer++;
      }
    }
  });
  return answer;
}
