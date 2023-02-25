function solution(nums) {
  let max = nums.length / 2;
  let answer = [...new Set(nums)];
  return answer.length > max ? max : answer.length;
}
