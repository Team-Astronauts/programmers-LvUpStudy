function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((value, idx) => value + arr2[i][idx]));
}
