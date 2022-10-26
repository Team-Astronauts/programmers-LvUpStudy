function solution(array, n) {
    let obj = {};
    let answer = 0;
    // 두 수의 차를 value로
    array.forEach(item => {
        obj[item] = Math.abs(item - n);
    })
    const minNum = Math.min(...Object.values(obj));
    return parseInt(Object.keys(obj).find(key => obj[key] === minNum));
}