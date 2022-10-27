function solution(numbers, k) {
  const len = numbers.length;
  let lastPeople = 1;

  for (let i = 0; i < k - 1; i++) {
    lastPeople += 2;

    if (lastPeople > len - 1) lastPeople -= len;
  }

  return lastPeople;
}
