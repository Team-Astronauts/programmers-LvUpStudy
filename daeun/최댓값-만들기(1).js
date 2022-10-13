function solution(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });
    max1 = numbers.slice(-1);
    max2 = numbers.slice(-2);
    return parseInt(max1) * parseInt(max2);
}

function solution2(numbers) {
    numbers.sort((a,b) => b - a); // sort를 화살표 함수로 간결하게 만들어 주기
    return numbers[0] * numbers[1]; // 굳이 slice로 접근하기 보다, numbers를 내림차순으로 정렬해 값에 바로 접근하는 방식 사용. numbers[-1]이 안 됐던 이유는 인덱스 값이 아니기 때문!
}