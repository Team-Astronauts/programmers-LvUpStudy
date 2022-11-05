function solution(s) {
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}

function solution2(s) {
  const answer = true;
  const findP = s.match(/p/gi);
  const findY = s.match(/y/gi);

  if (findP === null && findY === null) return answer;

  if (findP === null || findY === null) return !answer;

  return findP.length !== findY.length ? !answer : answer;
}
