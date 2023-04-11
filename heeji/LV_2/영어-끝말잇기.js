function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].substr(-1) !== words[i][0]) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      for (let j = 0; j < i; j++) {
        if (words[i] === words[j]) {
          return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
      }
    }
  }

  return [0, 0];
}

function solution(n, words) {
  let answer = [0, 0];
  let usedWords = [];
  usedWords.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let beforeWord = words[i - 1];
    let currentWord = words[i];
    if (
      beforeWord[beforeWord.length - 1] == currentWord[0] &&
      usedWords.indexOf(currentWord) == -1
    ) {
      // 계속 게임 진행
      usedWords.push(currentWord);
    } else {
      let turn = parseInt(i / n) + 1;
      let player = (i % n) + 1;
      return (answer = [player, turn]);
    }
  }
  return answer;
}
