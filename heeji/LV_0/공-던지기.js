function solution(numbers, k) {
    let ball = 1;
    for(i = 0; i < k-1; i++){
        ball += 2;
        if(ball > numbers.length){
            ball -= numbers.length;
        }
    };
    return ball;
}