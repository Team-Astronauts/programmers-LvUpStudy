function solution(sizes) {
    const rotate = sizes.map(([w, h]) => (w < h) ? [h, w] : [w, h]);
        
    const maxWidth = rotate.sort((a, b) => b[0] - a[0])[0][0];
    const maxHeight = rotate.sort((a, b) => b[1] - a[1])[0][1];
    
    return maxWidth * maxHeight;
}