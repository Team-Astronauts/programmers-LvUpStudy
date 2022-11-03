function solution(n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1,2) : -1;
 }
 //유의 : Math.sqrt(n) === parseInt(Math.sqrt(n)) -> Number.isInteger(Math.sqrt(n)) 