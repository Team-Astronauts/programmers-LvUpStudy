function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    for (const sum of d) {
        if (budget < sum) break;
        answer += 1;
        budget -= sum;
    }
    return answer;
}