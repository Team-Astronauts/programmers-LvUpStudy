function solution(n, k) {
    if(n<10){
    //n(양꼬치)이 10게 미만 주분 시 n과 음료수값(k) 은 그대로 출력)    
        return (n * 12000) + (k * 2000)  
    }
    //n이 10 이상일 경우 10개당 k의 기격에서 할인
    return (n * 12000) + (k * 2000) - (Math.floor(n/10) * 2000)
}