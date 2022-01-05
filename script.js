// /----defining moment varibles used to show time----//
var date = moment().format("MMM Do YY");

//-------append date----------//
$("#currentDay").append(date);

// writing a function to update the time
var timeOfday = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
updatetime();

function updatetime() {
    var currentTime = moment().format('H');
    for(var i = 0; i < timeOfday.length; i++) {
  
      if (parseInt(timeOfday[i]) < currentTime) {
          $("#" + timeOfday[i]).attr("style", "background-color: #c7c7c7");
  
      } else if (parseInt(timeOfday[i]) > currentTime) {
        $("#" + timeOfday[i]).attr("style", "background-color: #49ba6a");
      
      } else if (parseInt(timeOfday[i]) == currentTime) {
        $("#" + timeOfday[i]).attr("style", "background-color: #fa4a41");
      }
    }
  }

//   getting local storage to save to selected input to proper place
$(".saveBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});


$("#9am").children("input").val(localStorage.getItem("9am"));

