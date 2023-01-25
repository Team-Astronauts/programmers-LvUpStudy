function solution(s) {
  const arr = s.split(' ');

  while (arr.includes('Z')) {
    arr.splice(arr.indexOf('Z') - 1, 2);
  }

  return arr.map((i) => parseInt(i)).reduce((a, c) => a + c, 0);
}
