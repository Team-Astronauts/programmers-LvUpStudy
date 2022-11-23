function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let day = new Date(2016, a - 1, b);
  return week[day.getDay()];
}
