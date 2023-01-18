function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i)
        
        if (s[i] === ' ') {
            answer += ' '
        } else if (ascii <= 90 && ascii + n > 90 || ascii + n > 122) {
            answer += String.fromCharCode(ascii + n - 26)
        } else {
            answer += String.fromCharCode(ascii + n)
        }
    }
    return answer
}