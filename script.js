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
});

var gradeArray = [
  { firstName: "Dan", lastName: "Rosenbaum", gradeOutput: 95 },
  { firstName: "Deb", lastName: "ONair", gradeOutput: 95 },
  { firstName: "Jane", lastName: "Doe", gradeOutput: 95 },
];

function renderTable() {
  gradeArray.forEach((grade) => {
    //generate a code block for each grade
    var newRow = document.createElement("tr");
    newRow.classList.add(rowColor(grade.gradeOutput));
    newRow.innerHTML = `<td>${grade.firstName}</td>
    <td>${grade.lastName}</td>
    <td>${grade.gradeOutput}</td>`;
    //append it to the gradesTable
    gradesTable.appendChild(newRow);
  });
}

function rowColor(grade) {
  if (grade >= 90) {
    return "green";
  } else if (grade >= 80) {
    return "yellow";
  }
}

renderTable();

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
