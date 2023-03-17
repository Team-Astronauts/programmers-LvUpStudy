function solution(numbers, hand) {
  let ans = "";
  let list = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let left = list["*"];
  let right = list["#"];
  for (let k of numbers) {
    let [i, j] = list[k];
    if (j === 0) {
      // 왼손
      ans += "L";
      left = list[k];
    } else if (j === 2) {
      // 오른손
      ans += "R";
      right = list[k];
    } else {
      // 가운데
      let tmpL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
      let tmpR = Math.abs(i - right[0]) + Math.abs(j - right[1]);
      if (tmpL > tmpR) {
        right = list[k];
        ans += "R";
      } else if (tmpL < tmpR) {
        left = list[k];
        ans += "L";
      } else if (tmpL === tmpR) {
        if (hand === "left") {
          left = list[k];
          ans += "L";
        } else {
          right = list[k];
          ans += "R";
        }
      }
    }
  }
  return ans;
}
