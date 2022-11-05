function solution(x) {
    const sum = x.toString().split('').map((x) => parseInt(x)).reduce((a, b) => a + b);
    return (x % sum === 0) ? true : false;
}