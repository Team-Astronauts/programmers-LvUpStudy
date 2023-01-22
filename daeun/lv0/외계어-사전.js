function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");

  const map = dic.map((item) => item.split("").sort().join(""));

  return map.includes(sortedSpell) ? 1 : 2;
}
