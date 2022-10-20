function solution(s) {
    let obj = {};
    let answer = "";
    s.split("").forEach(item => {
        obj[item] = (obj[item] || 0) + 1;
    });
    for (let [key, value] of Object.entries(obj)) {
        if (obj[key] === 1) {
            answer += key;
        }
    }
    return answer.split("").sort().join("");
}
// 다른 분들 코드를 보면서 배웠습니다.