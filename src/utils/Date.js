export const weekDayConverter = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Sunday",
};

const monthConverter = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const formatDate = (date = new Date()) => {
  const zeroLeft = (num) => (num < 10 ? `0${num}` : num);
  return `${date.getFullYear()}-${zeroLeft(date.getMonth())}-${zeroLeft(
    date.getDate()
  )}`;
};

export const getWeekDay = () => weekDayConverter[new Date().getDay()];

export const getMonthName = (monthNumber = new Date().getMonth()) =>
  monthConverter[monthNumber];

export const getFirstDayOfMonth = (year, month) => new Date(year, month, 1);

export const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0);
