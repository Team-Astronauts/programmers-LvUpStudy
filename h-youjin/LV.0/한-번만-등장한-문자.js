function solution(s) {
  const result = [];

  for (el of s) {
    if (s.indexOf(el) === s.lastIndexOf(el)) result.push(el);
  }
  return result.sort().join('');
}
