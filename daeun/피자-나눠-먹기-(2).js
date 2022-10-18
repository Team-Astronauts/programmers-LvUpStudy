function solution(n) {
    const pizza = 6
    const gcd = (pizza, n) => pizza % n === 0 ? n : gcd(n, pizza % n);
    const lcm = (pizza, n) => pizza * n / gcd(pizza, n);
    return lcm(pizza, n)/6
}

function solution2(n) {
    let pizza2 = 6
    while (pizza2 % n !== 0) {
        pizza2 += 6
    }
    return pizza2 / 6
}