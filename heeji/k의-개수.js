function solution(i, j, k) {
    let select = "";
    for (let count = i; count <= j; count++) {
        select = select.concat(count);
        // .filter(count)??
    }
    return select.split(k).length-1;
}