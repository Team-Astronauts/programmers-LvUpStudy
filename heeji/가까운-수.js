function solution(array, n) {
    const newarr = [];
    for(let item = 0; item < array.length; item++) {
        newarr.push(Math.abs(array[item] - n));
    }
    const result = array.sort((a, b) => a - b);
    return result.find(el => Math.abs(n - el) === Math.min(...newarr));
}