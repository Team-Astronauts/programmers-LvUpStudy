function solution(numbers) {
    // 정렬 후 곱
    numbers = numbers.sort((a,b) => b-a);
    return (numbers[0] * numbers[1]);
}