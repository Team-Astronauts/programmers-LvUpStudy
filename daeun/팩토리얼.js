function solution(n) {
    let factorial = 1;
    for (let i = 1; i < 11; i++) {
        factorial *= i
        if (factorial === n) {
            return i
        } else if (factorial > n) {
            return i - 1
        }
    }
}