function solution(n) {
    const arr = Array(n + 1).fill(1);
    let answer = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!arr[i]) continue;
        
        for (let j = i * 2; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    
    for (let i = 2; i <= n; i ++) {
        if (arr[i]) answer++;
    }
    return answer;
}