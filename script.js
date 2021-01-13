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
var currentTime = moment().format('h:mm:ss a')

var calendlyTimes = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",];

// Display current date/time on page
$("#currentDay").append(currentDayEl);
$("#timeDisplay").append("Time: " + currentTime);

// create for loop to that will 
// create rows user can input data
// create button for each row
for (let i = 0; i < calendlyTimes.length; i++) { 
    // refrring to activities
    // var createRow = $(".row").text(calendlyTimes[i]);
    // var createTextArea = $("textarea").text(calendlyTimes[i]);
    // var createHour = $(".hour").text(calendlyTimes[i]);

    // creating new time-block div
    var createTimeBlocks = $("<div>");
    createTimeBlocks.addClass("time-block");

    // creating new row div
    var createRow = $("<div>");
    createRow.addClass("row");
    // createRow.text(calendlyTimes[i]);
    // createRow.text("ROW PLACE HOLDER");

    // creating createTextArea for each row
    // var createTextArea = $("<div>");
    var createTextArea = $("<input>");
    createTextArea.addClass("textarea col-9");
    // createTextArea.text(calendlyTimes[i])
    // createTextArea.text("TEXT AREA PLACE-HOLDER TEXT, REMINDER TO EDIT FONT")

    // creating hour column which will populate with the times for each row
    var createHour = $("<div>");
    createHour.addClass("hour col-2");
    createHour.text(calendlyTimes[i]);

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
    // createRow.append(createTextArea);
    // createRow.append(createBtn);
}
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// ASk TA about this step is it possible to parse int current time array? (8:00am) or create/remove class with if statement?

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// locale storage to save event (button)
// locale storage (getitem)
// locale storage (setItem)

//  reference code from activity which inspired idea 

/* <thead>
<tr>
  <!-- The scope attribute specifies that this is a header for a column -->
  <th scope="col">Movie Name</th>
  <th scope="col">Year</th>
  <th scope="col">Actors</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Interstellar</td>
  <td>2014</td>
  <td>Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow</td>
</tr>

</tbody> */
/* <script type="text/javascript">

var movie = "Space Jam";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var newRow = $("<tr>");
  var newTitle = $("<td>").text(response.Title);
  var newYear = $("<td>").text(response.Year);
  var newActors = $("<td>").text(response.Actors);
  newRow.append(newTitle, newYear, newActors);
  $("tbody").append(newRow);
}); */
