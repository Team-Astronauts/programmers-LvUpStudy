function solution(n, k) {
    return (12000 * n) + 2000 * (k - Math.floor(n/10));
}

function solution2(n, k) {
    return (12000 * n) + 2000 * (k - ~~(n/10)); // ~~은 Math.floor 와 동등하게 쓰이는 연산자
}