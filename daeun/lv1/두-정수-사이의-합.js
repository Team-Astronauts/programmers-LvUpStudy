function solution(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2; // 가우스 공식
}

// if 문과 while 문을 사용한 풀이
function solution2(a, b) {
    let result = 0;
    if (a === b) {
        return a
    } else if (a > b) {
        while (a >= b) {
            result += b++
        }
        return result
    } else {
        while (a <= b) {
            result += a++
        }
        return result
    }
}