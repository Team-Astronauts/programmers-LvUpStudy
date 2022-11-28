function solution(strings, n) {
  strings.sort((secondArg, firstArg) => {
    if (secondArg[n] < firstArg[n]) return -1;
    if (secondArg[n] === firstArg[n]) {
      if (secondArg < firstArg) return -1;
    }
  });

  return strings;
}
