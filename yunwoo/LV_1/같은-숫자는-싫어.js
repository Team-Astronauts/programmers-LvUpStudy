function solution(arr) {
  const result = [];

  for (const el of arr) {
    const lastElement = result[result.length - 1];

    if (lastElement !== el) result.push(el);
  }

  return result;
}
