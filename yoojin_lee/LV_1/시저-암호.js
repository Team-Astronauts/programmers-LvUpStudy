// A - Z : 65 - 90
// a - z : 97 - 122
function solution(s, n) {
    return s
        .split("")
        .map((i) => {
            if (i === " ") return i;
            return i.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(i.charCodeAt() + n - 26) : String.fromCharCode(i.charCodeAt() + n);
        })
        .join("");
}
