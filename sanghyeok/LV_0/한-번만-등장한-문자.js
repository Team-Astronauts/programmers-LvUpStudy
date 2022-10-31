//타 코드를 참고하여 배웠습니다.
//1. indexOf, lastIndexOf 
function solution(s) {
    const result = [];
  
    for (e of s) {
      if (s.indexOf(e) === s.lastIndexOf(e)) result.push(e);
    }
    return result.sort().join('');
  }
  
  //2. 객체를 이용한 풀이
  // function solution(s) {
  //     let answer = "";
  //     let obj = {};
  //     s.split('').forEach(item => {
  //             obj[item] = (obj[item] || 0) + 1;
  //     })
  
  //     for (let [key, value] of Object.entries(obj)) {
  //         if (obj[key] === 1) answer += key
  //     }
  //     return answer.split('').sort().join('')
  // }
  