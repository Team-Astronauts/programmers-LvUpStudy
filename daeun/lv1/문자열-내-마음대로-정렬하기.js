function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > n[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) return a > b ? 1 : -1;
        return 0;
    })
}

// 예를 들어 'a'.localeCompare('b') 인 경우, 'a'가 'b'보다 전에 위치하는 문자열이므로 -1을 반환.
// 반대의 경우는 1이며, 'a'와 'a'를 비교하면 0을 반환한다.
function solution2(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}