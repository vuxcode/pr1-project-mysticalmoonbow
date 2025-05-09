var answers = [
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

// Connect the buttons to different variables
var a1 = document.getElementById("0");
var a2 = document.getElementById("1");
var a3 = document.getElementById("2");
var a4 = document.getElementById("3");
var b1 = document.getElementById("4");
var b2 = document.getElementById("5");
var b3 = document.getElementById("6");
var b4 = document.getElementById("7");
var c1 = document.getElementById("8");
var c2 = document.getElementById("9");
var c3 = document.getElementById("10");
var d1 = document.getElementById("11");
var d2 = document.getElementById("12");
var d3 = document.getElementById("13");
var d4 = document.getElementById("14");
var d5 = document.getElementById("15");
var e1 = document.getElementById("16");
var f1 = document.getElementById("17");
var f2 = document.getElementById("18");
var f3 = document.getElementById("19");
var f4 = document.getElementById("20");
var f5 = document.getElementById("21");
var g1 = document.getElementById("22");
var g2 = document.getElementById("23");
var g3 = document.getElementById("24");
var g4 = document.getElementById("25");
var g5 = document.getElementById("26");
var h1 = document.getElementById("27");
var h2 = document.getElementById("28");
var h3 = document.getElementById("29");
var h4 = document.getElementById("30");
var h5 = document.getElementById("31");
var h6 = document.getElementById("32");
var h7 = document.getElementById("33");
var i1 = document.getElementById("34");
var i2 = document.getElementById("35");
var i3 = document.getElementById("36");
var i4 = document.getElementById("37");

var userAnswers = [
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

// This function will run every time a button is clicked
function getID() {
  // Update the currentID variable with the id of the button that's been clicked
  currentID = document.getElementById(this.id).id;
  // Update the currentAnswer variable with the user's latest answer
  currentAnswer = prompt();
  console.log(currentID);
  // Store the user's answer in the userAnswers array
  userAnswers[currentID] = currentAnswer
  console.log(userAnswers);
  // Updates the number box with the user's input
  document.getElementById(this.id).innerText = currentAnswer;
}