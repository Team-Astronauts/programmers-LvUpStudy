function solution(arr) {
    const minIndex = arr.indexOf(Math.min(...arr));
    arr.splice(minIndex, 1);
    return arr.length ? arr : [-1];
}