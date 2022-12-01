function solution(number, limit, power) {
    // 1. 약수 개수 배열 뽑기
    let arr = [];
    for (let i = 1; i <= number; i++) {
        let num = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                num += 1;
            }
        }
        arr.push(num + 1);
    }
    return arr
        .map((item) => {
            return item > limit ? power : item;
        })
        .reduce((acc, cur) => acc + cur, 0);
}
