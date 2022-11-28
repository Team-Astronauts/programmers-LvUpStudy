function solution(n, m) {
    const answer = [];
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    
    for (let i = 1; i <= min; i++) {
        if (!(n % i) && !(m % i)) {
            gcd = i;
        }
    }
    answer.push(gcd);
    
    answer.push(
        gcd !== min ? (max/gcd) * (min/gcd) * gcd : min * (max/min)
    )
    return answer;
}