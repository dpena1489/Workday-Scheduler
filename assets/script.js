// Wraped all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
$(document).ready(function () {
  var currentHour = dayjs().hour();
  $('#currentDay').text(dayjs().format('MMM DD,YYYY'))


  $('.saveBtn').on('click', function (){
    console.log($(this).parent().attr('id'));
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val())
  })

  // Added code to apply the past, present, or future class to each time
  // for (var i = 9; i <= 17; i++) {
  //   if (currentHour == i) {
  //     $('#hour-' + i).attr("class", "row time-block present");
  //   } else if (currentHour > i) {
  //     $('#hour-' + i).attr("class", "row time-block past");
  //   } else {
  //     $('#hour-' + i).attr("class", "row time-block future");
  //   }
  // }
  
  // Added code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
  // $('#hour-9').children().eq(1).val(localStorage.getItem("hour-9"));
  // $('#hour-10').children().eq(1).val(localStorage.getItem("hour-10"));
  // $('#hour-11').children().eq(1).val(localStorage.getItem("hour-11"));
  // $('#hour-12').children().eq(1).val(localStorage.getItem("hour-12"));
  // $('#hour-13').children().eq(1).val(localStorage.getItem("hour-13"));
  // $('#hour-14').children().eq(1).val(localStorage.getItem("hour-14"));
  // $('#hour-15').children().eq(1).val(localStorage.getItem("hour-15"));
  // $('#hour-16').children().eq(1).val(localStorage.getItem("hour-16"));
  // $('#hour-17').children().eq(1).val(localStorage.getItem("hour-17"));
  

  $('#hour-10 textarea').text(localStorage.getItem("hour-10"))
  // TODO: Add code to display the current date in the header of the page.
});



