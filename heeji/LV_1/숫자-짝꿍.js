function solution(X, Y) {
  const common = [];
  const obj = {};

  for (const el of X) {
    obj[el] = (obj[el] || 0) + 1;
  }
  for (const el of Y) {
    if (obj[el]) {
      common.push(el);
      obj[el]--;
    }
  }
  common.sort((a, c) => c - a);
  if (!common.length) {
    return "-1";
  } else if (common[0] === "0") {
    return "0";
  }
  return common.join("");
}
