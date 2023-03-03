function solution(n, lost, reserve) {
  const training = Array(n).fill(1);

  lost.map((el) => (training[el - 1] = 0));
  reserve.map((el) => (training[el - 1] += 1));

  for (let i = 0; i < n; i++) {
    if (training[i] === 0 && training[i - 1] === 2) {
      training[i] = 1;
      training[i - 1] = 1;
    }

    if (training[i] === 0 && training[i + 1] === 2) {
      training[i] = 1;
      training[i + 1] = 1;
    }
  }

  return training.filter((el) => el > 0).length;
}
