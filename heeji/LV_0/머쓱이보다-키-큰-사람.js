function solution(array, height) {
  let count = array.filter((s) => {
      return s > height;
  }) .length
  return count;
}
/*
function solution(array, height){
  let answer = 0;
  for(let i of array){
      if(i > height) answer++
  }
      return answer;
  }
}*/