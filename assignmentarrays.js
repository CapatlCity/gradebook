// TO DO: 10A JLY 11 - CREATE NEW JS USING EXACT FORMAT FRM UDEMY COURSE TO RENDER LIST

const assignmentArray = [
  { id: 1, assignmentName: "Book Report" },
  { id: 2, assignmentName: "Final Exam" },
  { id: 3, assignmentName: "Group Project" },
  { id: 4, assignmentName: "Diorama" },
  { id: 5, assignmentName: "Pop Quiz" },
];

const assignmentAdd = {
  id: nextId,
  assignmentForm: assignmentForm.value.trim(),
};

assignmentArray.push(assignmentForm);
nextId++;

assignmentForm.value = "";

console.log(assignmentArray);

});

const assignmentForm = document.getElementById("assignmentAdd");

const renderList = function (assignmentArray, assignmentForm) {

  assignmentForm.addEventListener("submit", (event) => {
    event.preventDefault("submit");
 // localStorage.setItem(assignmentArray, "assignmentAdd");
 // console.log(localStorage.getItem("assignmentAdd"))

});

// assignmentADD is the text input ID on the index html
// assignmentFORM is a DOM variable in the JS that retrieves assignmentADD

assignmentForm.addEventListener("submit", (event) => {
  event.preventDefault("submit");

  

//renderList(assignment);

/*function newAssignment() {
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




/*  Click a given delete button on webpage, take the corresponding names and grade 
off of page, store info locally on browser using JSON to stringify the gradeArray*/

/*const assignmentJSON = JSON.stringify(assignmentArray); localStorage.setItem("testJSON", assignmentJSON); } */