var gradesTable = document.getElementById("gradesTable");
var inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault("submit"); // override default browser reset after "submit"
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var grade = document.getElementById("grade").value;
  console.log(firstName);
  console.log(lastName);
  console.log(grade);


  // testing the creation of a new branch

  // create conditional if-else if-else loop for converting numerical value to ABCDF

  var tableInput = document.createElement("td"); // table row created in js via document query

  // have table display first name, last name from form "as is"
  //-- populate firstname and lastname input from form field into table via a function

  var tableFirstName = document.createElement("td");
  tableFirstName.innerHTML = firstName;
  tableFirstName.appendChild(tableInput); 

  var tableLastName = document.createElement("td");
  tableLastName.innerHTML = lastName;
  tableLastName.appendChild(tableInput); 

  var tableGrade = document.createElement("td"); 
  tableGrade.innerHTML = grade;
  tableGrade.appendChild(tableInput); 

  var outputTable = document.getElementById("gradesTable"); //this is example of a DOM NODE!
  outputTable.appendChild(tableInput);
});

// TO DO - have table display numeric grade converted into ABCD or F

// TO DO - have table display a color based on alphabetical grade output using a boolean outputting green yellow orange red purple for ABCDF respectively
// create GH issue for converting numeric data into ABCDF

//THINGS TO TRY
// attenpt to append td nodes to tr node per line 33

const gradeInput = document.getElementById("grade").value;
if (gradeInput > 90) {
  TextDecoder.innerHTML("grade A");
} else if (gradeInput < 90 || gradeInput >= 80) {
  console.log("grade B)");
} else if (gradeInput < 80 || gradeInput >= 70) {
  console.log("grade C");
} else if (gradeInput < 70 || gradeInput >= 60) {
  console.log("grade D");
} else if (gradeInput < 60) {
  console.log("grade F");
} else {
  console.log("try again");
}

//document.querySelector(tbd).addEventListener('submit', functionnametbd)

