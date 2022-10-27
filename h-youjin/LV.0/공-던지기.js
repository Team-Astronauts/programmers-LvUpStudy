function solution(numbers, k) {
  let throwBall = numbers[0] + 2 * (k - 1);

  if (throwBall > numbers.length) {
    return throwBall % numbers.length;
  } else {
    return throwBall;
  }
}
