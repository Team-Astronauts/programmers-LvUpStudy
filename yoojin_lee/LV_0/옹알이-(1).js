function solution(babbling) {
  let cnt = 0;
  const regex = /^(aya|ye|woo|ma)+$/;
  babbling.forEach((i) => {
    if (regex.test(i)) cnt++;
  });
  return cnt;
}
