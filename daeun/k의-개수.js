function solution(i, j, k) {
    let arr = [];
    let result = 0;
    while (i <= j) {
        arr.push(i)
        i++
    }
    let arrSplit = arr.join('').split('');
    for (let i in arrSplit) {
        if (parseInt(arrSplit[i]) === k) result += 1
    }
    return result
}