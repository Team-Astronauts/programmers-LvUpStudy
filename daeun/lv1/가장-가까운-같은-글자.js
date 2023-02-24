function solution(s) {
  const answer = [];
  const repeated = [];

  [...s].forEach((item) => {
    if (!repeated.includes(item)) {
      answer.push(-1);
    } else {
      answer.push(repeated.length - repeated.lastIndexOf(item));
    }
    repeated.push(item);
  });

  return answer;
}

function solution2(s) {
  return [...s].map((item, idx) => {
    const index = s.slice(0, idx).lastIndexOf(item);
    return index < 0 ? index : idx - index;
  });
}
