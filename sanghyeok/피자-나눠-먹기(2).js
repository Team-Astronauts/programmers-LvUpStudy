function solution(n) {
    let pizza = 6;
         //pizza의 초기값은 6조각 
        // pizza가 인원수 나머지 0이 아니면 조각 수를 추가
        // 판의 갯 수를 구하는 것이니 조각 % 6
        while(pizza % n != 0){
            pizza += 6;
        }
        return pizza/6;
    }