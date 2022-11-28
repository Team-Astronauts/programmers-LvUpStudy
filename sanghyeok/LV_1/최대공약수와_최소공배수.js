function solution(n, m) {
    let gcd = 0;
    let lcm = 0;
    let result = [gcd, lcm];
    let num = n > m ? n : m;
    
    //최대공약수
    for(let i = 1; i <= num; i++) {
        if(n % i === 0 && m % i === 0) gcd = i;
    }
    //최소공배수
    lcm = (n * m) / gcd;
    
    result = [gcd, lcm]; 
    return result;    
}