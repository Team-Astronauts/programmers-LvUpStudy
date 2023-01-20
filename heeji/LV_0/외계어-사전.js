function solution(spell, dic) {
  spell = spell.sort().join("");
  return dic.map((i) => i.split("").sort().join("")).find((i) => i === spell)
    ? 1
    : 2;
}
