function solution(numbers) {
    numbers.sort((i,j)=> j-i);
       return numbers[0]*numbers[1]
   }
   
   
   // let result =0;
   // for(let i =0; i< number.length; i++){
   //     for(let j =i+1; j< number.length; j++){
   //        result = numbers[i]*numbers[j]
   //     }
   // }
   // return  Math.max(result)