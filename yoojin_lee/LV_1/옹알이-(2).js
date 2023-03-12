function solution(babbling) {
  const arr = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    let babb = babbling[i];
    for (let j = 0; j < arr.length; j++) {
      if (babb.includes(arr[j].repeat(2))) {
        break;
      }
      babb = babb.split(arr[j]).join(" ");
    }
    if (babb.split(" ").join("").length === 0) {
      answer++;
    }
  }
  return answer;
}
