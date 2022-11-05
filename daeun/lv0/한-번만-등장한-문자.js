function solution(s) {
    let answer = "";
    let obj = {};
    s.split('').forEach(item => {
            obj[item] = (obj[item] || 0) + 1;
    })
    
    for (let [key, value] of Object.entries(obj)) {
        if (obj[key] === 1) answer += key
    }
    return answer.split('').sort().join('')
}

function solution(s) {
    let answer = "";
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) obj[s[i]] = 0;
        obj[s[i]]++;
    }
    
    // s.split("").forEach(a => obj[a] !== undefined ? obj[a]+=1 : obj[a] = 1)
    
    for (let [key, value] of Object.entries(obj)) {
        if (obj[key] === 1) answer += key
    }
    return answer.split('').sort().join('')
}