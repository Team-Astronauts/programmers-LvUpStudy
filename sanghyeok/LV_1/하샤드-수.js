function solution(x) {
    let harshad = x % (x.toString().split("").reduce((acc, cur) => parseInt(acc) + parseInt(cur))) === 0;
    return harshad;
}