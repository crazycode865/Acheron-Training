enum WEEKDAYS {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
console.log(WEEKDAYS.SUNDAY);
let showType = (choice: WEEKDAYS) => {
  console.log(choice);
};
showType(WEEKDAYS.FRIDAY);
showType(WEEKDAYS.SUNDAY);
showType(WEEKDAYS.SATURDAY);

enum Tournaments {
  IPL,
  FIFA,
  UBA,
  WORLDCUP,
}
