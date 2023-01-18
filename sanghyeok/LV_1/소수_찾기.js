//에라토스테네스의 체 방식을 참고...
function solution(n) {
    let arr = [];
    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    // 2부터 시작해서 배수에 해당하는 수를 모두 지움.
    for(let i = 2; i <= n; i++) {
        //이미 지워진 건 건너뜀
        if(arr[i] === 0) continue;
            for(let j = i * 2; j <= n; j += i) {
                arr[j] = 0;
        }
    }
    // 배열에 남은 수를 return.
    return arr.filter(v => v !== 0).length;
}