function solution(seoul) {
  for (const i in seoul) {
    if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`;
  }
}
