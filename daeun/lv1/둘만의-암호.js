function solution(s, skip, index) {
  let answer = '';

  const regEx = new RegExp(`[^${skip}]`, 'g');
  const abc = 'abcdefghijklmnopqrstuvwxyz'.match(regEx);

  for (const a of s) {
    const idx = abc.indexOf(a) + index;

    answer += abc[idx % abc.length];
  }

  return answer;
}
