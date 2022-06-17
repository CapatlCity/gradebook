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
  { firstName: "Arthur", lastName: "Aardvark", gradeOutput: 85 },
  { firstName: "Billy", lastName: "Billington", gradeOutput: 75 },
  { firstName: "Chuckie", lastName: "Cheese", gradeOutput: 65 },
  { firstName: "Deb", lastName: "ONair", gradeOutput: 55 },
];

// step 1: create new row//
function renderTable() {
  gradeArray.forEach((grade) => {
    //generate a code block for each grade
    var newRow = document.createElement("tr"); // review use of ` and practice functions! //
    //this function is  is what creates new table rows//
    newRow.classList.add(rowColor(grade.gradeOutput));

    newRow.innerHTML = `<td>${grade.firstName}</td>   
    
    <td>${grade.lastName}</td>
    
    <td>${grade.gradeOutput}</td>`;

    // must create indvidually animating nodes for each data cell in the row that is intended to appear at the bottom
    // of the gradesTable ie appendages //
    gradesTable.appendChild(newRow);
  });
}

//step 2: calculate input and generate a color in the newly animated row//

function rowColor(grade) {
  if (grade >= 90) {
    return "green";
  } else if (grade >= 80) {
    return "yellow";
  } else if (grade >= 70) {
    return "orange";
  } else if (grade >= 60) {
    return "red";
  } else grade < 60;
  return "brown";
}

renderTable();

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
