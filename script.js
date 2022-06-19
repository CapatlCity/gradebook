var gradesTable = document.getElementById("gradesTable");

var inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", (event) => {
  event.preventDefault("submit"); // override default browser reset after "submit"

  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var gradeOutput = document.getElementById("grade");

  const newGrade = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    gradeOutput: gradeOutput.value.trim(),
  };
  gradeArray.push(newGrade);

  firstName.value = "";
  lastName.value = "";
  gradeOutput.value = "";

  renderTable();
});

var gradeArray = [
  { firstName: "Arthur", lastName: "Aardvark", gradeOutput: 85 },
  { firstName: "Billy", lastName: "Billington", gradeOutput: 75 },
  { firstName: "Chuckie", lastName: "Cheese", gradeOutput: 65 },
  { firstName: "Deb", lastName: "ONair", gradeOutput: 55 },
];

// step 1: create new row//
function renderTable() {
  //clear the table
  gradesTable.innerHTML = "";

  //generate new table

  //create TR
  const headerRow = document.createElement("tr");

  //create 'First' th and append to headerRow
  const first = document.createElement("th");
  first.innerText = "First";
  headerRow.appendChild(first);

  //create 'Last' th and append to headerRow
  const last = document.createElement("th");
  last.innerText = "Last";
  headerRow.appendChild(last);

  //create 'Grade' th and append to headerRow
  const grade = document.createElement("th");
  grade.innerText = "Grade";
  headerRow.appendChild(grade);

  //append headerRow onto the page, inside the gradesTable so that it is visible
  gradesTable.appendChild(headerRow);

  gradeArray.forEach((grade) => {
    //generate a code block for each grade
    var newRow = document.createElement("tr"); // review use of `template literal (string concatenation) and practice functions! //
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
