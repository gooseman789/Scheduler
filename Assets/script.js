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

  var currentTime = dayjs().format("HH");
  
    $('div').children('textarea').removeClass('past');
    $('div').children('textarea').addClass('future');
if (currentTime === 9) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('present');
  } else if (currentTime === 10) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('present');
  } else if (currentTime === 11) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('present');
  } else if (currentTime === 12) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('past');
    $('#hour-12').children('textarea').removeClass('future');
    $('#hour-12').children('textarea').addClass('present');
  } else if (currentTime === 13) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('past');
    $('#hour-12').children('textarea').removeClass('future');
    $('#hour-12').children('textarea').addClass('past');
    $('#hour-13').children('textarea').removeClass('future');
    $('#hour-13').children('textarea').addClass('present');
  } else if (currentTime === 14) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('present');
    $('#hour-12').children('textarea').removeClass('future');
    $('#hour-12').children('textarea').addClass('past');
    $('#hour-13').children('textarea').removeClass('future');
    $('#hour-13').children('textarea').addClass('past');
    $('#hour-14').children('textarea').removeClass('future');
    $('#hour-14').children('textarea').addClass('present');
  } else if (currentTime === 15) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('past');
    $('#hour-12').children('textarea').removeClass('future');
    $('#hour-12').children('textarea').addClass('past');
    $('#hour-13').children('textarea').removeClass('future');
    $('#hour-13').children('textarea').addClass('past');
    $('#hour-14').children('textarea').removeClass('future');
    $('#hour-14').children('textarea').addClass('past');
    $('#hour-15').children('textarea').removeClass('future');
    $('#hour-15').children('textarea').addClass('present');
  } else if (currentTime === 16) {
    $('#hour-9').children('textarea').removeClass('future');
    $('#hour-9').children('textarea').addClass('past');
    $('#hour-10').children('textarea').removeClass('future');
    $('#hour-10').children('textarea').addClass('past');
    $('#hour-11').children('textarea').removeClass('future');
    $('#hour-11').children('textarea').addClass('past');
    $('#hour-12').children('textarea').removeClass('future');
    $('#hour-12').children('textarea').addClass('past');
    $('#hour-13').children('textarea').removeClass('future');
    $('#hour-13').children('textarea').addClass('past');
    $('#hour-14').children('textarea').removeClass('future');
    $('#hour-14').children('textarea').addClass('past');
    $('#hour-15').children('textarea').removeClass('future');
    $('#hour-15').children('textarea').addClass('past');
    $('#hour-16').children('textarea').removeClass('future');
    $('#hour-16').children('textarea').addClass('present');
  } else {
      $('#hour-9').children('textarea').removeClass('future');
      $('#hour-9').children('textarea').addClass('past');
      $('#hour-10').children('textarea').removeClass('future');
      $('#hour-10').children('textarea').addClass('past');
      $('#hour-11').children('textarea').removeClass('future');
      $('#hour-11').children('textarea').addClass('past');
      $('#hour-12').children('textarea').removeClass('future');
      $('#hour-12').children('textarea').addClass('past');
      $('#hour-13').children('textarea').removeClass('future');
      $('#hour-13').children('textarea').addClass('past');
      $('#hour-14').children('textarea').removeClass('future');
      $('#hour-14').children('textarea').addClass('past');
      $('#hour-15').children('textarea').removeClass('future');
      $('#hour-15').children('textarea').addClass('past');
      $('#hour-16').children('textarea').removeClass('future');
      $('#hour-16').children('textarea').addClass('past');
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

});
