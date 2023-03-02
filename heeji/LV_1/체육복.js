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
