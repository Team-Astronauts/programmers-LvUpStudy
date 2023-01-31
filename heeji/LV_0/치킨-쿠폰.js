function solution1(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer += parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }
  return answer;
}

function solution2(chicken) {
  let answer = 0;
  let under = 0;
  while (chicken > 1) {
    answer += parseInt(chicken / 10);
    under += chicken % 10;
    chicken = chicken / 10;
  }
  answer += parseInt(under / 10);
  return answer;
}
