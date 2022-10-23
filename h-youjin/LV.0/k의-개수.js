function solution(i, j, k) {
  let arr = [];
  for (i; i <= j; i++) {
    arr.push(i);
  }
  let newArr = arr.join('').split('');
  let result = 0;
  for (let i in newArr) {
    if (newArr[i] == k) result++;
  }

  return result;
}
