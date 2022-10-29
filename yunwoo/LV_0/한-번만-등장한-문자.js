function solution(s) {
  const result = [];
  const strings = s.split("");

  const stringConvert = strings.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for ([keys, value] of Object.entries(stringConvert)) {
    if (value === 1) result.push(keys);
  }

  return result.sort().join("");
}

function solution(s) {
  const result = [];

  for (el of s) {
    if (s.indexOf(el) === s.lastIndexOf(el)) result.push(el);
  }
  return result.sort().join("");
}
