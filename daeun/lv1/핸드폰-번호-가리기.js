function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}

// 정규식을 사용한 방법이나, repeat와 slice를 사용한 방법보다 시간이 3배 정도 소요됨
function solution2(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, '*')
}