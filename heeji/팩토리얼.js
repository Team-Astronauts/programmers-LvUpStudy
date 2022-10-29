function solution(n) {
    let result = 1;
    for(index = 1; index <= n; index++){
        result *= index;
        if (result > n) return index-1;
    } return index - 1;
}
