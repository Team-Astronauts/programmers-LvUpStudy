function solution(phone_number) {
  const starQuantity = phone_number.length - 4;

  return (
    new Array(starQuantity).fill("*").join("") +
    phone_number.substring(starQuantity)
  );
}
