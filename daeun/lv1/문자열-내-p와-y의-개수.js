function solution(s){
    const countP = s.match(/p/gi)?.length;
    const countY = s.match(/y/gi)?.length;
    return countP === countY
}

// 화살표 함수와 변수 선언 제거로 한 줄로 줄이기
const solution = (s) => s.match(/p/gi)?.length === s.match(/y/gi)?.length;