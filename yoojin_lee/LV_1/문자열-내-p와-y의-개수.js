function solution(s){
    let pCount = 0;
    let yCount = 0;
    pCount = s.match(/P/gi);
    yCount = s.match(/Y/gi);
    // match 일치 값이 없으면 null 반환
    if ((pCount === null) && (yCount === null)) {
        return true;
    } else if ((pCount === null) || (yCount === null)) {
        return false;
    }
    // 값이 존재하는 경우
    if (pCount.length === yCount.length) {
        return true;
    } else return false;
}