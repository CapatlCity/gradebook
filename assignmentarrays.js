const assignmentArray = [
  { id: 1, assignmentName: "Book Report" },
  { id: 2, assignmentName: "Final Exam" },
  { id: 3, assignmentName: "Group Project" },
  { id: 4, assignmentName: "Diorama" },
  { id: 5, assignmentName: "Pop Quiz" },
];
// assignmentADD is the text input ID on the index html
// assignmentFORM is a DOM variable in the JS that retrieves assignmentADD
//

var assignmentForm = document.getElementById("assignmentAdd");
assignmentForm.addEventListener("submit", (event) => {
  event.preventDefault("submit");

  const assignmentAdd = {
    id: nextId,
    assignmentForm: assignmentForm.value.trim(),
  };
  assignmentArray.push(assignmentArray);
  nextId++;

  assignmentForm.value = "";
  console.log(assignmentAdd);
  //renderList(assignment);
});

//var assignmentArray = JSON.parse(localStorage.getItem("testJSON"));

//renderList(assignment);

function newAssignment() {
  assignmentArray.innerHTML = "";

  assignmentArray.forEach((assignmentForm) => {
    var newAssign = document.createElement("ul");
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

/* function deleteAssignment(event) {
  console.log(`clicked on delete ${event.target.dataset.assignmentName}`);
  // function to filter through the array and remove the assignment whose id === event.target.dataset.gradeid
  const filteredArray = assignmentArray.filter(
    (assignment) => assignment.id !== parseInt(event.target.dataset.assignmentName
  ),

  console.log(filteredArray),

  renderList(assignment),
}



renderTable();

/*  Click a given delete button on webpage, take the corresponding names and grade 
off of page, store info locally on browser using JSON to stringify the gradeArray*/

/*const assignmentJSON = JSON.stringify(assignmentArray);
localStorage.setItem("testJSON", assignmentJSON);

// the array must have the ability to delete and add things } 
*/
