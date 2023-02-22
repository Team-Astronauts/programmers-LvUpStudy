process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  // 입력받을 숫자 'data'에 받는다.
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]); // a는 한 줄에 있는 별의 갯수, b는 별 몇줄 출력할지.
  let result = "";
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
});

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => { // 입력받을 숫자 'data'에 받는다.
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]); // a는 한 줄에 있는 별의 갯수, b는 별 몇줄 출력할지.
//     let result = "*".repeat(a);
//     for (let i = 1; i <= b; i++){
//         console.log(result);
//     }
// });
