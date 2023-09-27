//this waits to see if the page is fully loaded before running
$(document).ready(function () {

  //adding the date at the top of the page
  var currentDate = dayjs().format('dddd MMMM, DD');
  $('#currentDay').text(currentDate);
  

  //making an object of the keys, which are the ID names
  var keys = []
  for (var i=0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    keys.push(key)
  }

  //changing the value of the textarea based on the keys index
  for (var i=0; i < keys.length; i++) {
    $('#' + keys[i]).children('.description').val(localStorage.getItem(keys[i]));
  }

 //event listeners for the buttons
 //adding the text from the textarea into local storage using the IDs as the keys
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

  //checking the Time for the change of color function below
  var currentTime = dayjs().format("HH");
console.log(currentTime)

//code to change the color of the textarea 
//I assume there is an easier way to list this info, I will look into this later. 
  if (currentTime < 9) {
    $('div').children('textarea').removeClass('past');
    $('div').children('textarea').addClass('future');
  }
  else if (currentTime == 9) {
      $('#hour-9').children('textarea').removeClass('future');
      $('#hour-9').children('textarea').addClass('present');
    } else if (currentTime == 10) {
      $('#hour-9').children('textarea').removeClass('future');
      $('#hour-9').children('textarea').addClass('past');
      $('#hour-10').children('textarea').removeClass('future');
      $('#hour-10').children('textarea').addClass('present');
    } else if (currentTime == 11) {
      $('#hour-9').children('textarea').removeClass('future');
      $('#hour-9').children('textarea').addClass('past');
      $('#hour-10').children('textarea').removeClass('future');
      $('#hour-10').children('textarea').addClass('past');
      $('#hour-11').children('textarea').removeClass('future');
      $('#hour-11').children('textarea').addClass('present');
    } else if (currentTime == 12) {
      $('#hour-9').children('textarea').removeClass('future');
      $('#hour-9').children('textarea').addClass('past');
      $('#hour-10').children('textarea').removeClass('future');
      $('#hour-10').children('textarea').addClass('past');
      $('#hour-11').children('textarea').removeClass('future');
      $('#hour-11').children('textarea').addClass('past');
      $('#hour-12').children('textarea').removeClass('future');
      $('#hour-12').children('textarea').addClass('present');
    } else if (currentTime == 13) {
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
    } else if (currentTime == 14) {
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
    } else if (currentTime == 15) {
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
    } else if (currentTime == 16) {
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

  });
