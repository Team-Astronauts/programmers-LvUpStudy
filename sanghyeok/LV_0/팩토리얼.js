function solution(n) {
    let result = 1;
    
    for(let i=1; i<=10; i++){
        result *= i;
    
        if(n === result) return i;      
        else if(n < result) return i-1; 
    }
}

// while문일 때
/* function solution(n) {
    let result = 1;
    let i = 1;

         while(true){
         i *= result
         
             if(i>n){
                 result--
                 break;
             }
                 result++
         }
         return result;
     } */