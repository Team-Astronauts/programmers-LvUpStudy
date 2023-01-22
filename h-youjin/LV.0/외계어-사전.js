function solution(spell, dic) {
  return dic.some((s) => spell.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
