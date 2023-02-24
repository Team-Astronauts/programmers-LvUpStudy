process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);

  let star = '';
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= a; j++) {
      star += '*';
      if (j === a) {
        star += '\n';
      }
    }
  }
  console.log(star);
});
