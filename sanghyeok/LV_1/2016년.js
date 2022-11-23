function solution(a, b) {
    //윤년 : 2월이 29일까지  
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let sum = b;
    for (let i = 0; i < a-1; i++) sum += month[i];
  
    //console.log(sum)  
    switch(sum % 7) {
     case 0 :
           return week[4];  
            break;
     case 1 :
           return week[5];
            break;
     case 2 :
           return week[6];
            break;
     case 3 :
           return week[0];
            break;
     case 4 :
           return week[1];
            break;
     case 5 :
           return week[2];
            break;
     case 6 :
           return week[3];
    }
}
