function solution(phone_number) {
  return Array(phone_number.length - 4)
    .fill('*')
    .concat([...phone_number].splice(phone_number.length - 4, 4))
    .join('');
}
