function solution(babbling) {
  let pos = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i in babbling) {
    let say = babbling[i];

    for (let j in pos) {
      if (babbling[i].includes(pos[j])) {
        say = say.replace(pos[j], "C");
        console.log(say);
      }
    }
    // 다른 문자 넣어서 단어 구분해주기
    say = say.replace(/C/g, "");
    if (say.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
