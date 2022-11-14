function solution(arr, divisor) {
    const answer = [];
    arr.forEach(item => {
        if (item % divisor === 0) {
            answer.push(item)
        }
        answer.sort((a, b) => a - b)
    })
    return answer.length ? answer : [-1];
}