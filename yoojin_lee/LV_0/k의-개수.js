function solution(i, j, k) {
    let arr = "";
    // 다 하나로 합쳐서 해당 숫자 개수 찾기
    // .split(k) 기준으로 나누기 -> length-1
    for (let start = i; start <= j; start++) {
        arr = arr.concat(start);
    }
    return arr.split(k).length - 1;
}