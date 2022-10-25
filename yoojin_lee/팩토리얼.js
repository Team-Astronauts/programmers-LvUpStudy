function solution(n) {
    let result = 1;
    let i = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
        if (result > n) return i - 1;
    }
    return i - 1;
}