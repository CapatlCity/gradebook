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

  var tableInput = document.createElement("tr"); // table row created in js via document query
  var outputTable = document.getElementById("gradesTable"); //this is example of a DOM NODE!
  outputTable.appendChild(tableInput);
});

// TO DO
// PUT OUTPUT IN THE TABLE
// have form populate input from form into table
// decide if we want colors to change as grade and names calculated
// create loop to calculate grade and determine what color will output

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
