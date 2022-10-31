function solution(n) {
    // i : 총 피자 조각
    // 6조각, 인원 사이의 공배수 push -> result
    // result[0] -> 최소공배수 (최소 피자 조각)
    // parseInt(result[0])/6 -> 최소 피자 판 개수
    let result = [];
    for (let i = 1; i <= n * 6; i++) {
        if (((i % 6) === 0) &&((i % n) === 0)) {
            result.push(i);
        }
    }
    return Math.ceil(parseInt(result[0])/6);
}