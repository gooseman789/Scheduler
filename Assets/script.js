// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  var currentDate = dayjs().format('dddd MMMM, DD');
  $('#currentDay').text(currentDate);
  
  var keys = []
  for (var i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    keys.push(key)
  }

  for (var i=0; i <keys.length; i++) {
    $('#' + keys[i]).children('.description').val(localStorage.getItem(keys[i]));
  }

 
  var saveButton = $('.btn');
  saveButton.on('click', function() {
    var inputEL = $(this).parent();
    var inputID = inputEL.attr('id');
    if (inputID === "hour-17") {
      alert("This cannot be changed.  You must care about yourself.")
    }
    else {var inputTEXT = $(inputEL).children(".description").val();
    localStorage.setItem(inputID, inputTEXT);}
  })

  var currentTime = dayjs().format("HH")
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});
