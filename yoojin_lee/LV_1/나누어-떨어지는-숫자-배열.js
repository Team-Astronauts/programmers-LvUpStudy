function solution(arr, divisor) {
    arr.sort((a, b) => a - b)
    const answer = arr.filter(item => item % divisor === 0);
    return answer.length > 0 ? answer : [-1];
}