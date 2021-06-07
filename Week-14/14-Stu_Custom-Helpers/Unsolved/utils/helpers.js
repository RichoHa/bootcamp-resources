module.exports = {
  format_time: (date) => {

    return date.toLocaleTimeString();
  },
  format_date: (date) => {

    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date2: (inputDate) => {

    var month = inputDate.getUTCMonth();
    var day = inputDate.getUTCDate();
    var year = inputDate.getUTCFullYear() + 5;
    newdate = year + "/" + month + "/" + day;

    return newdate;
  },

};
