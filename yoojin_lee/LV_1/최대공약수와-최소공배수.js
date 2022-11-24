function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);
