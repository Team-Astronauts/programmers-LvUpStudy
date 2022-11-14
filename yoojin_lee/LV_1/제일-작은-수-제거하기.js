function solution(arr) {
    let minNum = 0;
    minNum = Math.min(...arr);   
    arr = arr.filter(v => v !== minNum);
    return arr.length > 0 ? arr : [-1]
}