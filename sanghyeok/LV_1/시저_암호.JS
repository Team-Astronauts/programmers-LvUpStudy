function solution (s, n) {
    let result = "";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== " ") {
            if(s.charCodeAt(i) <= 90) {
                result += String.fromCharCode((s.charCodeAt(i) + n - 65) % 26 + 65); 
            } else result += String.fromCharCode((s.charCodeAt(i) + n - 97) % 26 + 97);
        } else result += " ";             
  }
  return result;
}

