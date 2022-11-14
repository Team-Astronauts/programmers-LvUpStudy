function solution(absolutes, signs) {
    return absolutes.map((v, i) => v * (signs[i] ? 1 : -1)).reduce((acc, cur) => acc += cur);
}