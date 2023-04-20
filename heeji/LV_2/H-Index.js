function solution(citations) {
  let answer = 0;
  // 내림차순 정렬
  citations.sort((a, c) => c - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      answer = i + 1;
    } else {
      // 인용 횟수 i + 1미만인 경우 바로 break;
      break;
    }
  }
  return answer;
}
