function solution(x) {
    let arr = (String(x).split('')).map(Number);
    const num = arr.reduce((acc, cur) => acc + cur);
    return (x % num === 0) ? true : false;
}