var gradesTable = document.getElementById("gradesTable");

var inputForm = document.getElementById("inputForm");

let nextId = 5;

inputForm.addEventListener("submit", (event) => {
  event.preventDefault("submit"); // override default browser reset after "submit"

  var firstName = document.getElementById("fname");
  var lastName = document.getElementById("lname");
  var gradeOutput = document.getElementById("grade");

  const newGrade = {
    id: nextId,
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    gradeOutput: gradeOutput.value.trim(),
  };
  gradeArray.push(newGrade);
  nextId++;

  firstName.value = "";
  lastName.value = "";
  gradeOutput.value = "";

  renderTable();
});

var gradeArray = [
  { id: 1, firstName: "Arthur", lastName: "Aardvark", gradeOutput: 85 },
  { id: 2, firstName: "Billy", lastName: "Billington", gradeOutput: 75 },
  { id: 3, firstName: "Chuckie", lastName: "Cheese", gradeOutput: 65 },
  { id: 4, firstName: "Deb", lastName: "ONair", gradeOutput: 55 },
];

// step 1: create new row//
function renderTable() {
  gradesTable.innerHTML = "";

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

  // create delete button column
  const deleteHeader = document.createElement("th");
  deleteHeader.innerText = "Delete";
  headerRow.appendChild(deleteHeader);

  //append headerRow onto the page, inside the gradesTable so that it is visible
  gradesTable.appendChild(headerRow);

  gradeArray.forEach((grade) => {
    //generate a code block for each grade
    var newRow = document.createElement("tr"); // review use of `template literal (string concatenation) and practice functions! //
    //this function is what creates new table rows//
    newRow.classList.add(rowColor(grade.gradeOutput));

    newRow.innerHTML = `<td>${grade.firstName}</td>
    
    <td>${grade.lastName}</td>
    
    <td>${grade.gradeOutput}</td>
    
    <td><button data-gradeid=${grade.id} class="delete-btn">Delete</button></td>`;

    // must create indvidually animating nodes for each data cell in the row that is intended to appear at the bottom
    // of the gradesTable ie appendages //
    gradesTable.appendChild(newRow);
  });

  const deleteBtnArray = document.querySelectorAll(".delete-btn");

  deleteBtnArray.forEach((btn) => btn.addEventListener("click", deleteGrade));
}

function deleteGrade(event) {
  console.log(`clicked on delete ${event.target.dataset.gradeid}`);
  // filter through the array and remove the grade whose id === event.target.dataset.gradeid
  const filteredArray = gradeArray.filter(
    (grade) => grade.id !== parseInt(event.target.dataset.gradeid)
  );

  // console.log(filteredArray);

  gradeArray = filteredArray;

  renderTable();
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

//to do - add delete buttton, and save info to page upon refresh//
//
//create function that deletes the new appended row
//without removing the entire table!

/* const e = document.querySelector("gradesTable:newRow");

  btn-primary.addEventListener("submit", (event) => {
    event.preventDefault("submit"); 
    e.parentElement.removeChild(e);

    function deleteRow(e);
  alert("The form was reset"); */
