// not an active script as of July 8

var gradesTable = document.getElementById("gradesTable");
var inputForm = document.getElementById("inputForm");

let nextId = 5;

inputForm.addEventListener("submit", (event) => {
  event.preventDefault("submit"); // override default browser reset after "submit"


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

var assignmentArray = JSON.parse(localStorage.getItem("testJSON"));

renderTable();


var assignmentArray = [
  { assignmentName: "Book Report" },
  { assignmentName: "Final Exam", },
  { firstName: "Chuckie", lastName: "Cheese", gradeOutput: 65 },
  { firstName: "Deb", lastName: "ONair", gradeOutput: 55 },
];


const infoDeleteRefresh = document.querySelector("tr", "th");
infoDeleteRefresh.addEventListener(pagerefresh);
{
  infoDeleteRefresh.remove();
}

// remove(newRow)

// create new row on Grade Table on webpage//
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
  assignmentList.appendChild(headerRow);

  assignmentArray.forEach((assignment) => {
    //generate a code block for each assignment input
    //array is the placeholder box in assignmentarraysJS
    //list is the list that will appear on the site
    //grade will be assignment

    var newRow = document.createElement("tr"); // review use of `template literal (string concatenation) and practice functions! //
    //this function is what creates new table rows//
    newRow.classList.add(rowColor(assignment.assignmentOutput));
    //todo confirm input form ID for assignment page
    newRow.innerHTML = `<td>${assignment.assignmentName}</td>
    
    <td><button data-gradeid=${assignment.id} class="delete-btn">Delete</button></td>`;

  //only need two "rows": assignmentName and delete button
    assignmentList.appendChild(newRow); // need to rename gradeTable
  });
  console.log(assignmentArray);

  const deleteBtnArray = document.querySelectorAll(".delete-btn");

  deleteBtnArray.forEach((btn) => btn.addEventListener("click", deleteAssignment));
}
/*loop function and "on click" event listener for the selected delete button will pull data from page, 
loop through the assignmentArray and remove corresponding items from page */

function deleteAssignment(event) {
  console.log(`clicked on delete ${event.target.dataset.gradeid}`);
  // function to filter through the array and remove the assignment whose id === event.target.dataset.gradeid
  const filteredArray = assignmentArray.filter(
    (assignment) => assignment.id !== parseInt(event.target.dataset.gradeid)
  );

  console.log(filteredArray);

  assignmentArray = filteredArray;

  renderTable();
}



renderTable();

/*  Click a given delete button on webpage, take the corresponding names and grade 
off of page, store info locally on browser using JSON to stringify the gradeArray*/

const assignmentJSON = JSON.stringify(assignmentArray);
localStorage.setItem("testJSON", assignmentJSON);

// the array must have the ability to delete and add things