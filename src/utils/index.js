export const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  //to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

export const removeSymbolsFromString = (string) =>
  string.replace(/[^A-Z0-9]/gi, '');
