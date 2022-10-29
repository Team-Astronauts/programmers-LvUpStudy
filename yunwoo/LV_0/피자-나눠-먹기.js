function solution(n) {
  let pizza = 6;

  while (pizza % n) {
    pizza += 6;
  }

  return pizza / 6;
}
