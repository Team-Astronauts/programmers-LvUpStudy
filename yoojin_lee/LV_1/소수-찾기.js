function solution(n) {
    let count = 1;
    // 0 ~ n까지
    let arr = new Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) continue;
        // 에라토스테네스의 체 방식
        if (arr[i] === 1) {
            for (let j = i; i * j <= n; j++) {
                arr[i * j] = 0;
            }
            count++;
        }
    }
    return count;
}
