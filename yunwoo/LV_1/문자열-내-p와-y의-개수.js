function solution(s) {
  const lowerString = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let el of lowerString) {
    if (el === "p") pCount++;
    else if (el === "y") yCount++;
  }

  return pCount === yCount;
}
