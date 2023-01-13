function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (!(n % i)) {
                return false;
            }
        }
        return true;
    }
}

function solution(n) {
    const answer = [];
    for (let i = 2; i <= n; i++) {
        if (!(n % i)) {
            answer.push(i);
        }
    }
    return answer.filter((item) => isPrime(item));
}
