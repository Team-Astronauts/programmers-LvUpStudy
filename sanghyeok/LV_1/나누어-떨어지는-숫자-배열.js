function solution(arr, divisor) {
    let result = [];
    
    result = arr.filter(e => e % divisor === 0);
    
    if (result.length === 0) return [-1];
    else {
      return result.sort(function(a, b) {
        return a - b;
        });
    }
}
