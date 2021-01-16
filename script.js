//  create new variables
var currentDayEl = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h:mm A');
// create objects containing string and number
var calendlyTimes = [
  {
    normalTime: "8:00 AM",
    timeValue: 8,
  },

  {
    normalTime: "9:00 AM",
    timeValue: 9,
  },

  {
    normalTime: "10:00 AM",
    timeValue: 10,
  },

  {
    normalTime: "11:00 AM",
    timeValue: 11,
  },

  {
    normalTime: "12:00 PM",
    timeValue: 12,
  },

  {
    normalTime: "1:00 PM",
    timeValue: 13,
  },

  {
    normalTime: "2:00 PM",
    timeValue: 14,
  },

  {
    normalTime: "3:00 PM",
    timeValue: 15,
  },

  {
    normalTime: "4:00 PM",
    timeValue: 16,
  },

  {
    normalTime: "5:00 PM",
    timeValue: 17,
  },

  {
    normalTime: "6:00 PM",
    timeValue: 18,
  },

  {
    normalTime: "7:00 PM",
    timeValue: 19,
  },

  {
    normalTime: "8:00 PM",
    timeValue: 20,
  },

  {
    normalTime: "9:00 PM",
    timeValue: 21,
  },
];

// variable for current time to compare versus time value
var currentTimeAttr = Number(moment().format('HH'));

// Display current date/time on page
$("#currentDay").append(currentDayEl);
$("#timeDisplay").append("Time: " + currentTime);

// create for loop that generates time-blocks containing rows, hour column, text input column, and button column.
for (let i = 0; i < calendlyTimes.length; i++) {
  // new variables to distinguish normalTime and timeValue
  var hours = calendlyTimes[i].normalTime;
  var hourVal = calendlyTimes[i].timeValue;

  // creating new time-block div
  var createTimeBlocks = $("<div>");
  createTimeBlocks.addClass("time-block");

  // creating new row div
  var createRow = $("<div>");
  createRow.addClass("row");

  // creating createTextArea for each row
  var createTextArea = $("<input>");
  createTextArea.addClass("textarea col-9");
  createTextArea.attr("id", hourVal);
  // pull in data from local storage to save user inputs
  createTextArea.val(JSON.parse(localStorage.getItem(hourVal)));
  // if/else statement to populate row color depending on time value (past, present, future)
  if (calendlyTimes[i].timeValue < currentTimeAttr) {;
    createTextArea.addClass("past");
  } else if (calendlyTimes[i].timeValue === currentTimeAttr) {
    createTextArea.addClass("present");
  } else if (calendlyTimes[i].timeValue > currentTimeAttr) {
    createTextArea.addClass("future");
  };

  // creating hour column which will populate with the hours for each row
  var createHour = $("<div>");
  createHour.addClass("hour col-2");
  createHour.text(hours);

  // creating the buttons for each row
  var createBtn = $("<button>");
  createBtn.addClass("saveBtn col-1 fab fa-jedi-order fa-3x");
  createBtn.attr("data-hour", hourVal);
  createBtn.addClass("saveBtn i:hover");

  // locale storage to save event (button)
  // locale storage (getitem)
  // locale storage (setItem)
  createBtn.on("click", function (event) {
    event.preventDefault();
    // Assistance from TA, was able to create code to store user input in local storage
    var eventInput = $("#"+$(this).attr("data-hour")).val();
    localStorage.setItem($(this).attr("data-hour"), JSON.stringify(eventInput));
  });
  // appending new time block div to the container class in the HTML file
  $(".container").append(createTimeBlocks);
  // appending new row div to the time-block div
  createTimeBlocks.append(createRow);
  // appending new elements to the new row to appear in the time-block div below the container
  createRow.append(createHour, createTextArea, createBtn);
}



