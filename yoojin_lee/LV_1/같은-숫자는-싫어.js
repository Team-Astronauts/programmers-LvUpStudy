function solution(arr) {
    return arr.filter((i, idx) => i != arr[idx + 1]);
}
