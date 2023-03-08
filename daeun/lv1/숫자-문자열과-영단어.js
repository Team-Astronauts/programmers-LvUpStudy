function solution(s) {
  const word = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < word.length; i++) {
    let temp = s.split(word[i]);
    s = temp.join(i);
  }

  return +s;
}
