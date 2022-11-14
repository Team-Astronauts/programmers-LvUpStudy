function solution(absolutes, signs) {
    let answer = 0;
    for (let i in absolutes) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}