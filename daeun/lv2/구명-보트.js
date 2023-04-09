function solution(people, limit) {
  let answer = 0;
  let len = people.length - 1;

  people.sort((a, b) => b - a);

  while (answer < len) {
    if (people[answer] + people[len] > limit) {
      answer++;
    } else {
      answer++;
      len--;
    }
  }
  if (answer === len) answer++;

  return answer;
}
