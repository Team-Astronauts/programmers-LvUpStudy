function solution(a, b) {
  let day = new Date(2016, a - 1, b);
  const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return WEEKDAY[day.getDay()];
}
// getDaty() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환 (0 - 일요일)
// 반환 값 : 0 (일요일) ~ 6 정수
