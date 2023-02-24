function solution(price, money, count) {
  let priceAcc = 0;
  for (let i = 1; i <= count; i++) {
    priceAcc += price * i;
  }
  return priceAcc > money ? priceAcc - money : 0;
}
