function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += i * price;
  }
  return money > sum ? 0 : sum - money;
}
