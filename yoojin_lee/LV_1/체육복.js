function solution(n, lost, reserve) {
  let realLost = lost.filter((i) => !reserve.includes(i)).sort();
  let realReserve = reserve.filter((i) => !lost.includes(i)).sort();

  for (let i = 0; i < realReserve.length; i++) {
    if (realLost.includes(realReserve[i] - 1)) {
      realLost = realLost.filter((k) => k !== realReserve[i] - 1);
    } else if (realLost.includes(realReserve[i] + 1)) {
      realLost = realLost.filter((k) => k !== realReserve[i] + 1);
    }
  }
  return n - realLost.length;
}
