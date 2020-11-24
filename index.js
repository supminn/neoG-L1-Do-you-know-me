var readlineSync = require("readline-sync");

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Supriya?");


// data of high score
var highScores = [
  {
    name: "Supriya",
    score: 5,
  },

  {
    name: "Sanjay",
    score: 3,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right!");
    score = score + 1;
    
  } else {
    console.log("Wrong!");
   
  }

  console.log("Current score: ", score);
  console.log("-------------")
}

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite music would be? ",
  answer: "Carnatic"
},{
  question: "Do I like Coding? ",
  answer: "Yes"
},{
  question: "My favorite color is? ",
  answer: "Red"
},
{
  question: "Do I want to be a part of NeoG camp's levelone? ",
  answer: "Yes"
}];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")