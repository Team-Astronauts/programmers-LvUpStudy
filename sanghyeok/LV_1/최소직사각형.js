function solution(sizes) {
    let result = [0 ,0];

    for(let i = 0; i < sizes.length; i++) {
        let [w, h] = sizes[i].sort((a, b) => a - b);
        if(result[0] < w) result[0] = w;
        if(result[1] < h) result[1] = h;
        }
    return result[0] * result[1];
    
}