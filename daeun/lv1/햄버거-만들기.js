function solution(ingredient) {
  const stack = [];
  let burger = 0;

  ingredient.forEach((v) => {
    stack.push(v);

    if (
      stack.length >= 4 &&
      stack[stack.length - 1] === 1 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 4] === 1
    ) {
      burger++;
      stack.splice(-4);
    }
  });

  return burger;
}

function solution2(ingredient) {
  const stack = [];
  let burger = 0;

  ingredient.forEach((v, i) => {
    stack.push(v);

    if (stack.length >= 4) {
      const slice = stack.slice(-4).join('');

      if (slice === '1231') {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        burger++;
      }
    }
  });

  return burger;
}
