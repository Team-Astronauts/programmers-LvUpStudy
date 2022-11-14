function solution(arr) {
    if (arr.length > 1) {
    let minNum = Math.min(...arr);
 
    arr.splice(arr.indexOf(minNum), 1);
    return arr;
        
    } else return [-1];
}