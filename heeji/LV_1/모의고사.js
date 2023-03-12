function solution(answers) {
  let answer = [];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1 = answers.filter((a, i) => a === s1[i % s1.length]).length;
  let a2 = answers.filter((a, i) => a === s2[i % s2.length]).length;
  let a3 = answers.filter((a, i) => a === s3[i % s3.length]).length;

  let max = Math.max(a1, a2, a3);
  if (a1 === max) {
    answer.push(1);
  }
  if (a2 === max) {
    answer.push(2);
  }
  if (a3 === max) {
    answer.push(3);
  }

  return answer;
}
