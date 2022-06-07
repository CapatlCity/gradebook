// version eliminates interaction with the table and direct output to alert box

var gradesTable = document.getElementById("gradesTable").value;
var inputForm = document.getElementById("inputForm").value;
const gradeInput = document.getElementById("grade").value;
var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var grade = document.getElementById("grade").value;

gradeA = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90];

function printResult() {
  for (let i = 0; i > gradeA.length; i--);
  alert("grade A");
}

//   if (gradeInput > 90) {
//     TextDecoder.innerHTML("grade A");
// } else if (gradeInput < 90 || gradeInput >= 80) {
//  alert("grade B");
// } else if (gradeInput < 80 || gradeInput >= 70) {
//  alert("grade C");
// } else if (gradeInput < 70 || gradeInput >= 60) {
// alert("grade D");
// } else if (gradeInput < 60) {
//  alert("grade F");
// } else {
//  alert("try again");
// }
// }
document.querySelector("#inputForm").addEventListener("submit", printResult);
e.preventDefault("submit"); // override default browser reset after "submit"

alert(firstName + lastName + gradeInput);

/* var tableInput = document.createElement("td");

  var tableFirstName = document.createElement("td");
  tableFirstName.innerHTML = firstName;
  tableFirstName.appendChild(tableInput); 

  var tableLastName = document.createElement("td");
  tableLastName.innerHTML = lastName;
  tableLastName.appendChild(tableInput); 

  var tableGrade = document.createElement("td"); 
  tableGrade.innerHTML = grade;
  tableGrade.appendChild(tableInput); 

  var outputTable = document.getElementById("gradesTable"); 
  outputTable.appendChild(tableInput);
});
*/

// TO DO - have table display numeric grade converted into ABCD or F

// TO DO - have table display a color based on alphabetical grade output using a boolean outputting green yellow orange red purple for ABCDF respectively
// create GH issue for converting numeric data into ABCDF

//THINGS TO TRY
// attenpt to append td nodes to tr node per line 33

//document.querySelector(tbd).addEventListener('submit', functionnametbd)
