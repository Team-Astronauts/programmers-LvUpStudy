function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    // console.log(d)
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum > budget) break;
        answer += 1;
    } return answer;
}

// 그리디 알고리즘
/*
가장 좋은 최적의 해 만 고르는 방법
*/