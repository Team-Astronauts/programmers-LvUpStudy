function solution(num_list, n) {
    const answer = [];
    // n이 2라면 -> i = 0 부터 splice(0,2), i = 2 부터 splice(2,4), i = 4 부터 splice(4,6)......
    for(let i = 0; i < num_list.length; i + n) {
        answer.push(num_list.splice(i,i+n));
    }
    return answer;
}