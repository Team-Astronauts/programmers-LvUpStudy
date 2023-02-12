function solution(babbling) {
  const say = ['aya', 'ye', 'woo', 'ma'];

  for (let i in babbling) {
    for (let j in babbling) {
      if (babbling[i].includes(say[j])) {
        babbling[i] = babbling[i].replace(say[j], 'X');
      }
    }
  }

  return babbling
    .map((item) => item.replace(/X/g, ''))
    .filter((item) => item === '').length;
}
