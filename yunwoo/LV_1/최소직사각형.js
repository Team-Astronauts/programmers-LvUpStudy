function solution(sizes) {
  const maxSize = Math.max(...sizes.flat());

  let secondMaxSize = 0;

  for (const el of sizes) {
    secondMaxSize =
      el[0] > el[1]
        ? Math.max(secondMaxSize, el[1])
        : Math.max(secondMaxSize, el[0]);
  }
  return maxSize * secondMaxSize;
}
