// /----defining moment varibles used to show time----//
var date = moment().format("MMM Do YY");

//-------append date----------//
$("#currentDay").append(date);

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

// writing a function to update the time
