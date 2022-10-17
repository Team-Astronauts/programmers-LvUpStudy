function solution(array, height) {
        let count = array.filter((v)=>{
            return v > height
        }).length
    return count
}
