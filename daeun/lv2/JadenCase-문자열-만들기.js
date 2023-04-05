function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1, str.length)
    )
    .join(' ');
}
