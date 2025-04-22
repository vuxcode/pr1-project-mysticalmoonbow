var refArray = [
  "a1", // a1 / Index 0
  "a2", // a2 / Index 1
  "a3", // a3 / Index 2
  "a4" // a4 / Index 3
];

var answers = [
  3, // a1 / Index 0
  9, // a2 / Index 1
  1, // a3 / Index 2
  4 // a4 / Index 3
];

// Connect the buttons to different variables
var a1 = document.getElementById("0");
var a2 = document.getElementById("1");
var a3 = document.getElementById("2");
var a4 = document.getElementById("3");

var userAnswers = [
  "", // a1 / Index 0
  "", // a2 / Index 1
  "", // a3 / Index 2
  "" // a4 / Index 3
];

// Create a variable for the current id
var currentID = "";
// Create a variable for the current answer
var currentAnswer = "";
// Create a variable for the current index
var currentIndex = userAnswers.indexOf("");

// Add an event listener to each button
a1.addEventListener("click", getID);
a2.addEventListener("click", getID);
a3.addEventListener("click", getID);
a4.addEventListener("click", getID);

// This function will run every time a button is clicked
function getID() {
  // Update the currentID variable with the id of the button that's been clicked
  currentID = document.getElementById(this.id);
  // Update the currentAnswer variable with the user's latest answer
  currentAnswer = prompt();
  // Update currentIndex with the current id
  currentIndex = array.indexOf(currentID);
  // Store the user's answer in the userAnswers array
  userAnswers[currentIndex] = currentAnswer
  // Updates the number box with the user's input
  document.getElementById(this.id).innerText = currentAnswer;
}