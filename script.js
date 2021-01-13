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

var currentDayEl = moment().format('MMMM Do YYYY, h:mm:ss a');

// Display current time on page
currentDayDiv$("#currentDay")

// create for loop to that will create rows amd 



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
