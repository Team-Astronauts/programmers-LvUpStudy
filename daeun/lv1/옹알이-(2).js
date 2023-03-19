function solution(babbling) {
  const canBab = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let j = 0; j < canBab.length; j++) {
      if (word.includes(canBab[j] + canBab[j])) break;

      word = word.split(canBab[j]).join(' ');
    }

    if (word.split(' ').join('').length === 0) {
      answer += 1;
    }
  }

  return answer;
}
