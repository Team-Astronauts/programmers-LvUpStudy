function solution(array, n) {
    let arr=[];
    
        for(let i = 0; i < array.length; i++){
                arr.push(Math.abs(n - array[i]))
        }
    
        let min = Math.min(...arr)
        let result = array.sort((a, b)=> a - b)
        return result.find(item => Math.abs(n - item) === min)  
    }