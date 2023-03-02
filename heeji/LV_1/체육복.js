function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let loststu = lost.filter((i) => !reserve.includes(i));
  let reservestu = reserve.filter((j) => !lost.includes(j));
  answer += lost.length - loststu.length;

  loststu.sort((a, b) => a - b);
  loststu.forEach((i) => {
    if (reservestu.length === 0) {
      return;
    }
    if (reservestu.includes(i - 1)) {
      reservestu = reservestu.filter((j) => j !== i - 1);
      answer++;
    } else if (reservestu.includes(i + 1)) {
      reservestu = reservestu.filter((j) => j !== i + 1);
      answer++;
    }
  });
  return answer;
}

function solution(n, lost, reserve) {
  const clothes = Array(n).fill(1);
  lost.map((lost) => {
    clothes[lost - 1] = 0;
  });
  reserve.map((reserve) => {
    clothes[reserve - 1] += 1;
  });

  for (let i = 0; i < n; i++) {
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }
  return clothes.filter((i) => i > 0).length;
}
