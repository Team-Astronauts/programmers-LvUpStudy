function solution(participant, completion) {
  // sort()는 유니코드 값 순서대로 정렬된다.
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
