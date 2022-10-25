function solution(n) {
    let result = 1;
    let maxI = 1;
    for (maxI = 1; maxI <= n; maxI++) {
        result *= maxI;
        if (result > n) return maxI - 1;
    }
    return maxI - 1;
}