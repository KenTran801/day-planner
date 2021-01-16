// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```


// Create variables
// ask TA or Tutor
// attempted ti user luxon with BCS learning help, could not figure it out

// import {DateTime } from 'luxon';
// var currentDayEl = DateTime.local();

// moment is not working 
// (WTF? Now it's working)
var currentDayEl = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h:mm A');
// set timeout function

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
//  create new var
var currentTimeAttr = Number(moment().format('HH'));
console.log(currentTimeAttr)

// Display current date/time on page
$("#currentDay").append(currentDayEl);
$("#timeDisplay").append("Time: " + currentTime);

// create for loop that generate time-blocks containing rows, hour column, text input column, and button column.
for (let i = 0; i < calendlyTimes.length; i++) { 
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
    
    // if/else statement to populate row color depending on time value (past, present, future)
    if (calendlyTimes[i].timeValue < currentTimeAttr) {
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
    createBtn.addClass("saveBtn i:hover");
    // createBtn.text("BUTTON PLACEHOLDER")

    // appending new time block div to the container class in the HTML file
    $(".container").append(createTimeBlocks);
     // appending new row div to the time-block div
    createTimeBlocks.append(createRow);
    // appending new elements to the new row to appear in the time-block div below the container
    createRow.append(createHour, createTextArea, createBtn);
}

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// locale storage to save event (button)
// locale storage (getitem)
// locale storage (setItem)
