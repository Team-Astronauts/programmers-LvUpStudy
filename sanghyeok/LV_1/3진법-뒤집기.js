function solution(n) {
    let result = 0;
    let conver = '';
    
    while(n > 0) {
        conver += n % 3;
        n = parseInt(n / 3);  
    } 
    
     let e = 0;
    
     for(let i = conver.length - 1; i >= 0; i--) {
        result += conver[i] * Math.pow(3, e);
        e++;
    }
    
    return result;
}