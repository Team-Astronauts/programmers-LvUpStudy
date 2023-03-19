function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const result = [];
  const answer = [];

  for (let i = 0; i < 3; i++) {
    let score = 0;

    for (let j = 0; j < answers.length; j++) {
      let answer = pattern[i][j % pattern[i].length];

      if (answers[j] === answer) score++;
    }
    result.push(score);
  }

  result.forEach((v, i) => {
    if (v === Math.max(...result)) {
      answer.push(i + 1);
    }
  });

  return answer;
}
