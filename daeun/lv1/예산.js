function solution(d, budget) {
    let answer = 0;
    const sortedD = d.sort((a, b) => a - b)

    for (let i in sortedD) {        
        budget -= sortedD[i]
        if (0 > budget) break;
        answer ++;
    }
    return answer;
}

// reduce를 활용한 방법.
function solution2(d, budget) {
    const sortedD = d.sort((a, b) => a - b)
    return sortedD.reduce((acc, cur) => {
        budget -= cur;
         // (budget >= 0)은 budget -= cur의 횟수만큼 그 결과를 true 혹은 false로 반환한다.
         // 예시 1의 경우 true(1)가 세 번, false(0)가 세 번 출력되므로 acc + 3이 결과로 return 된다.
        return acc + (budget >= 0);
    }, 0)
}