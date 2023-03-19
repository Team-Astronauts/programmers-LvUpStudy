function getDistance(start, target) {
  let sum = 0;
  sum += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  sum += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return sum;
}

function solution(numbers, hand) {
  let answer = "";
  const keys = {
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
  // 왼손, 오른손의 시작
  let leftHand = keys["*"];
  let rightHand = keys["#"];
  for (let i = 0; i < numbers.length; i++) {
    const target = numbers[i];
    // 왼손으로 누르는지
    let isLeft = false;
    if (target === 1 || target === 4 || target === 7) {
      isLeft = true;
    } else if (target === 3 || target === 6 || target === 9) {
      isLeft = false;
    } else {
      const leftDistance = getDistance(leftHand, keys[target]);
      const rightDistance = getDistance(rightHand, keys[target]);
      // 왼손 오른손 거리 같을 경우
      if (leftDistance === rightDistance) {
        if (hand === "left") {
          isLeft = true;
        }
      } else if (leftDistance < rightDistance) {
        isLeft = true;
      }
    }
    // 누른 후 위치 설정
    if (isLeft) {
      leftHand = keys[target];
      answer += "L";
    } else {
      rightHand = keys[target];
      answer += "R";
    }
  }
  return answer;
}
