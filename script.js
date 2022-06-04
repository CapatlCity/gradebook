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
      tableFirstName.appendChild(tableInput); // attenpt to append td nodes to tr node per line 33

  var tableLastName = document.createElement("td");
      tableLastName.innerHTML = lastName;
      tableLastName.appendChild(tableInput); // attenpt to append td nodes to tr node per line 33

  var tableGrade = document.createElement("td"); // create GH issue for converting numeric data into ABCDF
      tableGrade.innerHTML = grade;
      tableGrade.appendChild(tableInput);  // attenpt to append td nodes to tr node per line 33
      
  var outputTable = document.getElementById("gradesTable"); //this is example of a DOM NODE!
      outputTable.appendChild(tableInput);
});









