// Create the a1 button
var a1 = document.getElementById("a1");
// "Listen" for the click
a1.addEventListener("click", userInput);

// Create the a2 button
var a2 = document.getElementById("a2");
// "Listen" for the click
a2.addEventListener("click", userInput);

// Create the a3 button
var a3 = document.getElementById("a3");
// "Listen" for the click
a3.addEventListener("click", userInput);

// Create the a4 button
var a4 = document.getElementById("a4");
// "Listen" for the click
a4.addEventListener("click", userInput);

var answers = [
  3, // Answer 1 / Index 0
  9, // Answer 2 / Index 1
  1, // Answer 3 / Index 2
  4 // Answer 4 / Index 3
];

var userAnswer = [
  a1, // Answer 1 / Index 0
  a2, // Answer 2 / Index 1
  a3, // Answer 3 / Index 2
  a4 // Answer 4 / Index 3
];

function userInput() {
  // The user can input their guess and their input is stored as a variable
  userAnswer = prompt();
  // Updates the number box with the user's input
  document.getElementById("a1").innerText = userAnswer;
  // The loop will start from index 0
  // The loop will stop when the index ends
  // The loop will go through the array one step at a time
  for (var i = 0; i < answers.length; i++) {
    if (userAnswer[i] == answers[i]) {
        // Tell the user they're right
        alert("Correct!");
      } else {
        // Tell the user they're wrong and show the correct answer
        alert("Incorrect.");
      }
  }
}