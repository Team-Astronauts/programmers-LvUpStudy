function solution(num_list, n) {
    let answer = [];
    while (num_list.length) {
        answer.push(num_list.splice(0, n))
    }
    return answer;
}

    // 테스트 1
    // 입력값 〉	[1, 2, 3, 4, 5, 6, 7, 8], 2
    // 기댓값 〉	[[1, 2], [3, 4], [5, 6], [7, 8]]
    // 실행 결과 〉	실행한 결괏값 [[1,2],[3,4],[5,6]]이 기댓값 [[1,2],[3,4],[5,6],[7,8]]과 다릅니다.
    // 출력 〉	[ 3, 4, 5, 6, 7, 8 ]
    // [ 5, 6, 7, 8 ]
    // [ 7, 8 ]
    // 테스트 2
    // 입력값 〉	[100, 95, 2, 4, 5, 6, 18, 33, 948], 3
    // 기댓값 〉	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
    // 실행 결과 〉	테스트를 통과하였습니다.
    // 출력 〉	[ 4, 5, 6, 18, 33, 948 ]
    // [ 18, 33, 948 ]
    // []

function solution(num_list, n) {
    answer = [];
    for (let i = 0; i < num_list.length; i+n) {
      answer.push(num_list.splice(0, n));
      console.log(num_list)
    }
    return answer;
}

    // 테스트 1
    // 입력값 〉	[1, 2, 3, 4, 5, 6, 7, 8], 2
    // 기댓값 〉	[[1, 2], [3, 4], [5, 6], [7, 8]]
    // 실행 결과 〉	테스트를 통과하였습니다.
    // 출력 〉	[ 3, 4, 5, 6, 7, 8 ]
    // [ 5, 6, 7, 8 ]
    // [ 7, 8 ]
    // []
    // 테스트 2
    // 입력값 〉	[100, 95, 2, 4, 5, 6, 18, 33, 948], 3
    // 기댓값 〉	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
    // 실행 결과 〉	테스트를 통과하였습니다.
    // 출력 〉	[ 4, 5, 6, 18, 33, 948 ]
    // [ 18, 33, 948 ]
    // []

    function solution(num_list, n) {
        const answer = [];
        for (let i = 0; i < num_list.length;) {
          answer.push(num_list.splice(0, n));
          console.log(num_list)
        }
        return answer;
    }

    function solution(num_list, n) {
        const answer = [];
        for(let i = 0; i < num_list.length; i+=n) answer.push(num_list.slice(i, i+n));
        return answer;
    }