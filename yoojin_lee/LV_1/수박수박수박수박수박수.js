function solution(n) {
    let arr = '';
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            arr+=('수');
        } else {
            arr+=('박');
        }
    }
    return arr;
}