function solution(number) {
  let answer = 0;
  const member = (current, start) => {
    if (current.length === 3) {
      answer += current.reduce((a, b) => a + b, 0) === 0 ? 1 : 0;
      return;
    }
    for (let i = start; i < number.length; i++) {
      // 중복을 방지하기 위해
      member([...current, number[i]], i + 1);
    }
  };
  member([], 0);
  return answer;
}
