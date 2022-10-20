function solution(s) {
    const result = [];
    const count = {};
    for (let i = 0; i < s.length; i++) {
        const num = s[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    for([keys, value] of Object.entries(count)) {
            if (value === 1) result.push(keys);
    }
    return result.sort().join("");
}