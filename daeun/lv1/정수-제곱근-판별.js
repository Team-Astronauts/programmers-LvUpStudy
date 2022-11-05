function solution(n) {
    const root = Math.sqrt(n)
    return Number.isInteger(root) ? Math.pow((root + 1), 2) : -1;
}