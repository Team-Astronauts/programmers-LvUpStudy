function solution(s) {
    const middleOfS = ~~(s.length/2)
    return s.length % 2 ? s[middleOfS] : s[middleOfS - 1] + s[middleOfS]
}