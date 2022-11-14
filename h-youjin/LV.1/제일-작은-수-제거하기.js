function solution(arr) {
  const newArr = [...arr];
  const minIndex = newArr.indexOf(Math.min(...newArr));
  newArr.splice(minIndex, 1);

  return newArr.length > 1 ? newArr : [-1];
}
