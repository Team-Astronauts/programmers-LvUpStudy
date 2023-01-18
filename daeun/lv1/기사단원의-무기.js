function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let count = 1;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        count > limit ? answer += power : answer += count;
    }
    return answer
}