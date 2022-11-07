function solution(phone_number) {
    let star = phone_number.length - 4;
    return "*".repeat(star) + phone_number.substring(star);
}