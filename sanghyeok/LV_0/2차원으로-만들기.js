function solution(num_list, n) {
    let result = [];
    //num_list.length % n =0
    //for문 numlist는 n의 배수라는 점에 유의
    //num_list.splice : n만큼 잘라내서(n의 배수니까) 출력한다
    for(let i=0; i<num_list.length/n; i+n){
       result.push(num_list.splice(i,n))  
    }
return result
}