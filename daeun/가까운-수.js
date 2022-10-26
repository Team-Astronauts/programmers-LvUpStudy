function solution(array, n) {
    array.push(n);
    array.sort((a,b) => a-b);
    
    const indexOfN = array.indexOf(n)
    
    if (array[indexOfN + 1] === undefined) {
        return array[indexOfN - 1]
    } else if (Math.abs(n - array[indexOfN + 1]) === Math.abs(n - array[indexOfN - 1])) {
        return array[indexOfN - 1]
    } else {
        return array[indexOfN + 1]
    }
}