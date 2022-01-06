// /----defining moment varibles used to show time----//
var date = moment().format("MMMM ddd Do, YYYY");

//-------append date----------//
$("#currentDay").append(date);

// writing a function to update the time
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
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
  console.log("timeOfDay is ", timeOfday)
  
  var siblings = $(this).siblings()
  console.log(siblings) //I expect this would be an array of the clicked button's siblings
  console.log(siblings[0]) //so this would probably be the first element in that array...
  console.log(siblings[1]) //and this might be the second. The only way to tell is through running this code!

  var textContent = siblings[1].value
  console.log(textContent)

  localStorage.setItem(timeOfday, textContent);
  console.log(timeOfday, textContent);
});

// the local storage target area
$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));
