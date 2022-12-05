// 소수 판별
function isPrime(x){
  for(let i = 2; i <= Math.sqrt(x); i++){
    if (x % i === 0){
      return false;
    }
  } return true;
}
// 소수 개수 구하기
function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++){
    if (isPrime(i))answer++;
  }
  return answer;
}