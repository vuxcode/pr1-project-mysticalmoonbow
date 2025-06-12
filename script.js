// All of the correct answers in an array
var correctAnswer = [
  3, // a1 / Index 0
  9, // a2 / Index 1
  1, // a3 / Index 2
  4, // a4 / Index 3
  1, // b1 / Index 4
  9, // b2 / Index 5
  8, // b3 / Index 6
  3, // b4 / Index 7
  1, // c1 / Index 8
  7, // c2 / Index 9
  9, // c3 / Index 10
  8, // d1 / Index 11
  6, // d2 / Index 12
  5, // d3 / Index 13
  3, // d4 / Index 14
  1, // d5 / Index 15
  4, // e1 / Index 16
  7, // f1 / Index 17
  5, // f2 / Index 18
  9, // f3 / Index 19
  4, // f4 / Index 20
  2, // f5 / Index 21
  9, // g1 / Index 22
  2, // g2 / Index 23
  3, // g3 / Index 24
  8, // g4 / Index 25
  1, // g5 / Index 26
  5, // h1 / Index 27
  3, // h2 / Index 28
  7, // h3 / Index 29
  8, // h4 / Index 30
  1, // h5 / Index 31
  4, // h6 / Index 32
  6, // h7 / Index 33
  7, // i1 / Index 34
  9, // i2 / Index 35
  5, // i3 / Index 36
  2 // i4 / Index 37
];

// Create a variable for every available button and connect them using getElementById
var buttons = [
  a1 = document.getElementById("0"), // Index 0
  a2 = document.getElementById("1"),
  a3 = document.getElementById("2"),
  a4 = document.getElementById("3"),
  b1 = document.getElementById("4"),
  b2 = document.getElementById("5"),
  b3 = document.getElementById("6"),
  b4 = document.getElementById("7"),
  c1 = document.getElementById("8"),
  c2 = document.getElementById("9"),
  c3 = document.getElementById("10"),
  d1 = document.getElementById("11"),
  d2 = document.getElementById("12"),
  d3 = document.getElementById("13"),
  d4 = document.getElementById("14"),
  d5 = document.getElementById("15"),
  e1 = document.getElementById("16"),
  f1 = document.getElementById("17"),
  f2 = document.getElementById("18"),
  f3 = document.getElementById("19"),
  f4 = document.getElementById("20"),
  f5 = document.getElementById("21"),
  g1 = document.getElementById("22"),
  g2 = document.getElementById("23"),
  g3 = document.getElementById("24"),
  g4 = document.getElementById("25"),
  g5 = document.getElementById("26"),
  h1 = document.getElementById("27"),
  h2 = document.getElementById("28"),
  h3 = document.getElementById("29"),
  h4 = document.getElementById("30"),
  h5 = document.getElementById("31"),
  h6 = document.getElementById("32"),
  h7 = document.getElementById("33"),
  i1 = document.getElementById("34"),
  i2 = document.getElementById("35"),
  i3 = document.getElementById("36"),
  i4 = document.getElementById("37")
];

// Create a variable for the validate button
var validate = document.getElementById("validate");

// Create an array for the user's answers
// All of them are originally empty strings that will be updated by the user's input
var userAnswer = [
  "", // a1 / Index 0
  "", // a2 / Index 1
  "", // a3 / Index 2
  "", // a4 / Index 3
  "", // b1 / Index 4
  "", // b2 / Index 5
  "", // b3 / Index 6
  "", // b4 / Index 7
  "", // c1 / Index 8
  "", // c2 / Index 9
  "", // c3 / Index 10
  "", // d1 / Index 11
  "", // d2 / Index 12
  "", // d3 / Index 13
  "", // d4 / Index 14
  "", // d5 / Index 15
  "", // e1 / Index 16
  "", // f1 / Index 17
  "", // f2 / Index 18
  "", // f3 / Index 19
  "", // f4 / Index 20
  "", // f5 / Index 21
  "", // g1 / Index 22
  "", // g2 / Index 23
  "", // g3 / Index 24
  "", // g4 / Index 25
  "", // g5 / Index 26
  "", // h1 / Index 27
  "", // h2 / Index 28
  "", // h3 / Index 29
  "", // h4 / Index 30
  "", // h5 / Index 31
  "", // h6 / Index 32
  "", // h7 / Index 33
  "", // i1 / Index 34
  "", // i2 / Index 35
  "", // i3 / Index 36
  "" // i4 / Index 37
];

// Create a variable for the current id
var currentID = "";
// Create a variable for the current answer
var currentAnswer = "";

// Add an event listener to each button
a1.addEventListener("click", getID);
a2.addEventListener("click", getID);
a3.addEventListener("click", getID);
a4.addEventListener("click", getID);
b1.addEventListener("click", getID);
b2.addEventListener("click", getID);
b3.addEventListener("click", getID);
b4.addEventListener("click", getID);
c1.addEventListener("click", getID);
c2.addEventListener("click", getID);
c3.addEventListener("click", getID);
d1.addEventListener("click", getID);
d2.addEventListener("click", getID);
d3.addEventListener("click", getID);
d4.addEventListener("click", getID);
d5.addEventListener("click", getID);
e1.addEventListener("click", getID);
f1.addEventListener("click", getID);
f2.addEventListener("click", getID);
f3.addEventListener("click", getID);
f4.addEventListener("click", getID);
f5.addEventListener("click", getID);
g1.addEventListener("click", getID);
g2.addEventListener("click", getID);
g3.addEventListener("click", getID);
g4.addEventListener("click", getID);
g5.addEventListener("click", getID);
h1.addEventListener("click", getID);
h2.addEventListener("click", getID);
h3.addEventListener("click", getID);
h4.addEventListener("click", getID);
h5.addEventListener("click", getID);
h6.addEventListener("click", getID);
h7.addEventListener("click", getID);
i1.addEventListener("click", getID);
i2.addEventListener("click", getID);
i3.addEventListener("click", getID);
i4.addEventListener("click", getID);

// Add an event listener to the validate button
validate.addEventListener("click", checkAnswer);

// This function will run every time a button is clicked
function getID() {
  // Update the currentID variable with the id of the button that's been clicked
  currentID = document.getElementById(this.id).id;
  // Update the currentAnswer variable with the user's latest answer
  currentAnswer = prompt("Input a number here");
  // Check if the input is an empty string
  if (currentAnswer == "") {
    console.log("The user hasn't entered any text");
    // Store the user's answer in the userAnswer array
    userAnswer[currentID] = currentAnswer
    // Update the number box with the user's input
    document.getElementById(this.id).innerText = currentAnswer;
    // Remove the "wrong" class from the button if there is one
    document.getElementById(this.id).classList.remove("wrong");
  }
  // Check if the input equals null
  else if (currentAnswer == null) {
    console.log("The user has pressed the cancel button");
  }
  // If the user has entered anything else and pressed "ok" the button will be updated with the user's answer
  else {
    // Store the user's answer in the userAnswer array
    userAnswer[currentID] = currentAnswer
    // Update the number box with the user's input
    document.getElementById(this.id).innerText = currentAnswer;
    // Remove the "wrong" class from the button if there is one
    document.getElementById(this.id).classList.remove("wrong");
  }
  // Check if every index in the userAnswer array correspond with the correctAnswer array
  var allCorrect = userAnswer.every((answer, index) => Number(answer) == correctAnswer[index]);

  // Tell the user that they're finished
  if (allCorrect) {
    console.log("Congratulations! All answers are correct!");
    alert("Congratulations! All answers are correct!");
  } else {
    
  }
}
  
// Create a function that will run every time the validate button is clicked
function checkAnswer() {
  console.log("The validate button has been clicked");
  for (var i = 0; i < correctAnswer.length; i++) {
    // Check if the user's answer is correct
    if (userAnswer[i] == correctAnswer[i]) {
    // The user's answer is shown in the console log
    console.log(correctAnswer[i]);
    // The box will turn green if the user's answer is right
    document.getElementById(i).classList.add("right");
    // Remove the "buttonFlex" class from the button
    document.getElementById(i).classList.remove("buttonFlex");
    // Add a "buttonFixed" class to the button
    document.getElementById(i).classList.add("buttonFixed");
    // Remove the event listener from the button
    buttons[i].removeEventListener("click", getID);
    }
    // Nothing happens if the user has entered an empty string
    else if (userAnswer[i] == "") {

    }
    // Nothing happens if the user has pressed "cancel"
    else if (userAnswer[i] == null) {

    }
    // The box will turn red if the user's answer is wrong
    else {
    document.getElementById(i).classList.add("wrong");
    }
  }
}