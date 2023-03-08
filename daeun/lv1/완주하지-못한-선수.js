function solution(participant, completion) {
  const hash = {};

  for (let p of participant) {
    hash[p] = hash[p] ? hash[p] + 1 : 1;
  }

  for (let c of completion) {
    hash[c] -= 1;
  }

  for (let key in hash) {
    if (hash[key] === 1) return key;
  }
}

function solution2(participant, completion) {
  const hash = completion.reduce(
    (key, idx) => ((key[idx] = key[idx] ? key[idx] + 1 : 1), key),
    {}
  );

  return participant.find((key) => {
    if (hash[key]) {
      hash[key] = hash[key] - 1;
    } else {
      return true;
    }
  });
}
