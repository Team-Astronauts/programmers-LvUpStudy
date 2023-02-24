function solution(nums) {
  const get = nums.length / 2;

  const set = new Set(nums).size;

  return set > get ? get : set;
}
