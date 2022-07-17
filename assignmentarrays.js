// TO DO: 10A JLY 11 - CREATE NEW JS

const seeds = [
  {
    id: 1,
    assignmentName: "Book Report",
    grades: [{ firstName: "Deb", lastName: "O'Nair", score: 80 }],
  },
  {
    id: 2,
    assignmentName: "Final Exam",
    grades: [{ firstName: "Aaron", lastName: "Balakay", score: 95 }],
  },
  {
    id: 3,
    assignmentName: "Group Project",
    grades: [{ firstName: "Sam", lastName: "Sample", score: 47 }],
  },
  {
    id: 4,
    assignmentName: "Diorama",
    grades: [{ firstName: "Banana", lastName: "Lolita", score: 87 }],
  },
  {
    id: 5,
    assignmentName: "Pop Quiz",
    grades: [{ firstName: "Dixie", lastName: "Normas", score: 78 }],
  },
];

if (!localStorage.getItem("assignmentArray")) {
  //remember the specific name of the array is seeds and "aA" is a banana name for local storage reference
  localStorage.setItem("assignmentArray", JSON.stringify(seeds)); //getItem reads the "", setItem writes-creates what is specified by getItem
}

//loop over localSTorage and render <li> fro each assignment name 07/16

function renderList() {
  var assignmentArray = JSON.parse(localStorage.getItem("assignmentArray"));

  for (var i = 0; i < assignmentArray.length; i++) {
    //length here refers to the number of items in the array, not length of strings
    var newAssign = document.createElement("li");
    newAssign.textContent = assignmentArray[i].assignmentName; //variable called-commandtextContent-banana name for local storage data-action-create element variable
    document.getElementById("assignment-list").appendChild(newAssign); //do not edit 7/16
  }
  return [item.assignment, item.grades];
}
