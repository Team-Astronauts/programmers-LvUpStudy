function solution(numbers, k) {
    let result =0;
    for(let i = 0; i <= k - 1; i++){
        result = numbers[(i * 2) % numbers.length];
    }
    return result;
}