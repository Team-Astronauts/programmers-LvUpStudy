function solution (num_list, n) {
    const newArray = [];
    for (i = 0; i < num_list.length; i + n) {
        newArray.push(num_list.splice(i, n));
    }
    return newArray;
}