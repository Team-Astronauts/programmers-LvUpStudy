function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].slice(-1) !== words[i][0]) {
      return [(i % n) + 1, ~~(i / n + 1)];
    } else {
      for (let j = 0; j < i; j++) {
        if (words[i] === words[j]) {
          return [(i % n) + 1, ~~(i / n + 1)];
        }
      }
    }
  }

  return [0, 0];
}
