function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// splice(음수값)은 배열 끝에서부터 요수를 센다.
}