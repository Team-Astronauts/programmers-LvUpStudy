
//문자열로 나열한 후 자릿수를 split으로 나누어 k에 해당하는 값을 찾아 count 한다.
function solution(i, j, k) {
    let result = '';
    for(let a = i ; a <= j ; a++){
        result += a
    }
    return result.split('').filter(e => e == k).length;
}