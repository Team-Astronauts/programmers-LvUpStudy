function solution(s){
    let answer = true
    let Pcount= 0;
    let Ycount= 0;
    let str = s.toUpperCase().split('') 
for(let i =0; i < str.length; i++){
    if(str[i] ==='P') Pcount++;

    else if(str[i] ==='Y') Ycount++
}
    if(Pcount != Ycount) answer = false;
     return answer;
}