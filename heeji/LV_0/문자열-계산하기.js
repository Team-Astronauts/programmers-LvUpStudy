function solution(my_string) {
  // return eval(my_string);
  return new Function("return " + my_string)();
}
