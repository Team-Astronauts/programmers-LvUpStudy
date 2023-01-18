function solution(number, limit, power) {
  const num = [];
  // 약수의 개수
  for (let i = 1; i <= number; i++){
    let divisor = 0;
    for (let j = 1; j <= i/2; j++){
      // j로 나눌때 나머지 0이면 약수divisor
      if(i % j === 0){
        divisor += 1;
      }
    }
    num.push(divisor + 1);
  }
  // 개수 배열을 num에 넣는다.
  return num.map((n) => {
    return n > limit ? power : n;
  }).reduce((acc, cur) => acc + cur, 0);
}