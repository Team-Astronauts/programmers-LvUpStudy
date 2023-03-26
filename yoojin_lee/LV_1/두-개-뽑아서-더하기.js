function solution(numbers) {
  let arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  const set = new Set(arr);
  const newArr = [...set];
  return newArr.sort((a, b) => a - b);
}
