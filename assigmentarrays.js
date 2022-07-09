var assignmentForm = document.getElementById("assignment");

assignmentForm.addEventListener("submit", (event) => {
  event.preventDefault("submit"); // override default browser reset after "submit"

  const assignmentAdd = {
    id: nextId,
    assignmentForm: assignmentForm.value.trim(),
  };
  assignmentArray.push(assingnmentAdd);
  nextId++;

  assignmentForm.value = "";
  console.log(assignment);
  //renderList(assignment);
});

// needs to genrate a list
// FIGURE OUT WHERE TOPLACE console.log(assignmentForm); //

var assignmentArray = JSON.parse(localStorage.getItem("testJSON"));

//renderList(assignment);

var assignmentArray = [
  { id: 1, assignmentName: "Book Report" },
  { id: 2, assignmentName: "Final Exam" },
  { id: 3, assignmentName: "Group Project" },
  { id: 4, assignmentName: "Diorama" },
  { id: 5, assignmentName: "Pop Quiz" },
];

// create new row on Grade Table on webpage//
//generate a code block for each assignment input
//array is the placeholder box in assignmentarraysJS
//list is the list that will appear on the site
//grade will be assignment

function newAssignment() {
  assignmentArray.innerHTML = "";

  assignmentArray.forEach((assignment) => {
    var newAssign = document.createElement("ul");
    //todo confirm input form ID for assignment page
    newRow.innerHTML = `<td>${assignment.assignmentName}</td>
    
    <td><button data-gradeid=${assignment.id} class="delete-btn">Delete</button></td>`;

    //only need two "rows": assignmentName and delete button
    assignmentList.appendChild(newAssignment);
  });
  console.log(assignmentArray);

  const deleteBtnArray = document.querySelectorAll(".delete-btn");

  deleteBtnArray.forEach((btn) =>
    btn.addEventListener("click", deleteAssignment)
  );
}

/*loop function and "on click" event listener for the selected delete button will pull data from page, 
loop through the assignmentArray and remove corresponding items from page */

 function deleteAssignment(event) {
  console.log(`clicked on delete ${event.target.dataset.assignmentName}`);
  // function to filter through the array and remove the assignment whose id === event.target.dataset.gradeid
  const filteredArray = assignmentArray.filter(
    (assignment) => assignment.id !== parseInt(event.target.dataset.assignmentName
  ),

  console.log(filteredArray),

  renderTable();
}



renderTable();

/*  Click a given delete button on webpage, take the corresponding names and grade 
off of page, store info locally on browser using JSON to stringify the gradeArray*/

/*const assignmentJSON = JSON.stringify(assignmentArray);
localStorage.setItem("testJSON", assignmentJSON);

// the array must have the ability to delete and add things } 
*/
