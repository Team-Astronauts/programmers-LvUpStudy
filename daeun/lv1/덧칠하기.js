function solution(n, m, section) {
  let answer = 0;
  const painted = Array(n).fill(0);

  section.map((empty) => (painted[empty - 1] = 1));

  let i = 0;

  while (i < painted.length) {
    if (painted[i] === 1) {
      answer++;
      i += m;
    } else {
      i++;
    }
  }

  return answer;
}
