var answers = [
  3, // Answer 1 / Index 0
  9, // Answer 2 / Index 1
  1, // Answer 3 / Index 2
  4 // Answer 4 / Index 3
];

// Connect the buttons to different variables
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");

var userAnswers = [
  "", // Answer 1 / Index 0
  "", // Answer 2 / Index 1
  "", // Answer 3 / Index 2
  "" // Answer 4 / Index 3
];

var refArray = [
  a1, // Answer 1 / Index 0
  a2, // Answer 2 / Index 1
  a3, // Answer 3 / Index 2
  a4 // Answer 4 / Index 3
];

var index = refArray.indexOf("a1");

// Add an event listener to each button
a1.addEventListener("click", getID);
a2.addEventListener("click", getID);
a3.addEventListener("click", getID);
a4.addEventListener("click", getID);

// This function will run every time a button is clicked
function getID() {
  userAnswers = prompt();
  // Updates the number box with the user's input
  document.getElementById(this.id).innerText = userAnswers[index];
}