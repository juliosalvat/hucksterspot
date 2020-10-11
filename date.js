var d = new Date();

// Get today's date
var day = d.getDate();
var month = d.getMonth() + 1; // The months are 0-based
var year = d.getFullYear();

// Prepend the day and month with 0
// Comment this out/remove it, to use the day and month as-is
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
// Set the date field to the current date
document.getElementById("date").value = day + "/" + month + "/" + year;
