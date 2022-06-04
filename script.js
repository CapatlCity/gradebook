var gradesTable = document.getElementById("gradesTable");
var inputForm = document.getElementById("inputForm");

// build form that functions well enough to take responses
// override default browser reset after "submit"
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var grade = document.getElementById("grade").value;
  console.log(firstName);
  console.log(lastName);
  console.log(grade);

// create new var, calculate grades


  var tableInput = document.createElement("tr"); // table row created in js via document query
  var tableFirstName = document.createElement("td");
      tableFirstName.innerHTML = firstName; 
  var tableLastName = document.createElement("td");
      tableLastName.innerHTML = lastName;
  var tableGrade = document.createElement("td"); // create GH issue for converting numeric data into ABCDF
      tableGrade.innerHTML = grade;
      // append td nodes to tr node per line 27
  var outputTable = document.getElementById("gradesTable"); //this is example of a DOM NODE!
  outputTable.appendChild(tableInput);
});

// TO DO
// create if else statement

/* let correct_button = document.querySelector("#correct"); //change color of the 4th answer button from white to green when clicked.
    correct_button.addEventListener('click', function() {
        correct_button.style.backgroundColor = "green";
        document.querySelector('#feedback1').innerHTML = 'Correct!';

});

USE TRIVIA LAB CODE AS A GUIDE OF SORTS -
 SEE IF THE DOCUMENT.QUERYSELECTOR FOR #FEEEDBACK CAN WORK 
IF  <P> IS PLACED INSIDE OF A TABLE CELL
let wrong_button = document.querySelectorAll(".wrong");
    //change color of the 1st through 3rd buttons from white to red when clicked.
    for (let i = 0; i < wrong_button.length; i++)
    {
    wrong_button[i].addEventListener('click', function() {
        wrong_button[i].style.backgroundColor = "red";
        document.querySelector('#feedback1').innerHTML = 'Wrong!';

    });

    }

// Part 2: add shortanswer form with text input and "check answer" submit button to HTML.
//remember DIV id is "shortanswer" and is linked to CSS styling


   
    });    */
