// function solution(survey, choices) {
//   const points = [3, 2, 1, 0, 1, 2, 3];
//   const pointBoard = {
//     R: 0,
//     T: 0,
//     C: 0,
//     F: 0,
//     J: 0,
//     M: 0,
//     A: 0,
//     N: 0,
//   };
//   let answer = "";

//   // 카테고리별 점수 추가
//   for (let i = 0; i < survey.length; i++) {
//     const categories = survey[i];
//     if (choices[i] < 4) {
//       pointBoard[categories[0]] += points[choices[i] - 1];
//     } else if (choices[i] > 4) {
//       pointBoard[categories[1]] += points[choices[i] - 1];
//     }
//   }
//   // Object.entries는 [key, value] 쌍 반환
//   const pointBoardEntries = Object.entries(pointBoard);

//   // 지표에 맞게 결과 값 출력
//   for (let i = 0; i < pointBoardEntries.length; i += 2) {
//     const [curCategory, curValue] = pointBoardEntries[i];
//     const [nextCategory, nextValue] = pointBoardEntries[i + 1];
//     if (curValue < nextValue) {
//       answer += nextCategory;
//     } else {
//       answer += curCategory;
//     }
//   }

//   return answer;
// }

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
