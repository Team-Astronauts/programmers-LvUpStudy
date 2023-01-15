function solution(id_pw, db) {
  let answer = "fail";
  db.forEach((i) => {
    if (i[0] === id_pw[0]) {
      answer = "wrong pw";
    }
    if (i[0] === id_pw[0] && i[1] === id_pw[1]) {
      answer = "login";
    }
  });
  return answer;
}
