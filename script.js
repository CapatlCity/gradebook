var gradesTable = document.getElementById("gradesTable");
var inputForm = document.getElementById("inputForm");

// build form that functions well enough to take responses
// override default browser reset after "submit"
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var grade = document.getElementById("grade").value;
  console.log(firstName);
  console.log(lastName);
  console.log(grade);
});


// TO DO
// have form populate input fromm form into table
// decide if we want colors to change as grade and names calculated
// create loop to calculate grade and determine what color will output
