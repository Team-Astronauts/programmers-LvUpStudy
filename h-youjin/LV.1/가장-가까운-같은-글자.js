const solution = (s) =>
  [...s].map((num, i) => {
    const findIdx = s.slice(0, i).lastIndexOf(num);
    return findIdx < 0 ? findIdx : i - findIdx;
  });
