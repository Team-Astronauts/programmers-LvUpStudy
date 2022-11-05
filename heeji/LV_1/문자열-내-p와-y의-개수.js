function solution(s){
    let pCount = s.split(/p/i).length-1;
    let yCount = s.split(/y/i).length-1;
    return pCount === yCount;
}