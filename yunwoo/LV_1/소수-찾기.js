const primeNumber = (x) => {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (primeNumber(i)) result++;
  }
  return result;
}
