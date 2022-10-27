function solution(numbers, k) {
    let count = 1;
    for (let i = 0; i < k * 2; i+=2) {
        if (count === k) return numbers[i % numbers.length]
        count ++;
    }
}