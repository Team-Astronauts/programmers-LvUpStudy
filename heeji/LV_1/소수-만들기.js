// 주어진 수가 소수인지 아닌지 판별하는 함수 isPrime
function isPrime(n) {
  // 2보다 작은 수는 소수가 아니다.
  if (n < 2) return false;
  // n을 2부터 n의 제곱근으로 나눠서 나머지 0이면 소수가 아니다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  // 그 외의 경우에는 소수.
  return true;
}

function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  return answer;
}
