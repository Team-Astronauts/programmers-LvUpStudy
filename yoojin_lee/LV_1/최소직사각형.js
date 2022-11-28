function solution(sizes) {
    let warr = [];
    let harr = [];
    // 가로에 큰 값 세로에 작은 값 배열로 변경
    for (let i = 0; i < sizes.length; i++) {
        warr.push(Math.max(sizes[i][0], sizes[i][1]));
        harr.push(Math.min(sizes[i][0], sizes[i][1]));
    }
    return Math.max(...warr) * Math.max(...harr);
}
