function solution(number, limit, power) {
    let a = [];

    for(let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
              count++;
                if (i / j !== j) { 
                  count++;
                }
            }
          } a.push(count);
    } 
    return a.map((item) => item > limit ? power : item).reduce((acc, cur) => acc + cur, 0); 
}