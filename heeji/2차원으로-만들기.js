function solution (num_list, n) {
    let newArray = [];
    for (i = 0; i < num_list.length; i + n) {
        newArray.push(num_list.splice(i, n));
    }
    return newArray;
}