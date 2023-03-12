function solution(numbers) {
  let answer = [];
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        set.add(numbers[i] + numbers[j]);
      }
    }
  }
  set.forEach((n) => answer.push(n));
  answer.sort((a, b) => a - b);
  return answer;
}
