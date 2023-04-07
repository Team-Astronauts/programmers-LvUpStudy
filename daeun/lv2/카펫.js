function solution(brown, yellow) {
  const size = brown + yellow;

  for (let i = 3; i < brown; i++) {
    if (size % i === 0) {
      let width = size / i;

      if ((width - 2) * (i - 2) === yellow) return [width, i];
    }
  }
}
