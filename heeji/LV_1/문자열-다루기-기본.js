function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (s == parseInt(s)) {
      return true;
    }
  }
  return false;
}
