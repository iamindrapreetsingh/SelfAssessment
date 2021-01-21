const readLineSync = require('readline-sync');

console.log("Welcome to Self Assessment ! After each question, Enter your option - a/b/c/d ");

input = () => readLineSync.question("Please select the correct Answer\n");

const validOptions = ["a", "b", "c", "d"];

const questions = {

  question1:
  {
    ques: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<scripting>",
    d: "javascript",
    correct: "a"
  },

  question2:
  {
    ques: "What does HTML stand for?",
    a: "Hyper Text Main Language",
    b: "Hyper Tool Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Made Language",
    correct: "c"
  },

  question3:
  {
    ques: "Who is making the Web standards?",
    a: "Mozilla",
    b: "W3C",
    c: "Google",
    d: "Microsoft",
    correct: "b"
  },

  question4:
  {
    ques: "Choose the correct HTML element for the largest heading:",
    a: "<head>",
    b: "<heading>",
    c: "<h6>",
    d: "<h1>",
    correct: "d"
  },

  question5:
  {
    ques: "What is the correct HTML element for inserting a line break",
    a: "<break>",
    b: "<lb>",
    c: "<br>",
    d: "<p>",
    correct: "c"
  },

  question6:
  {
    ques: "What is the correct HTML for adding a background color?",
    a: "<background>Yellow</background>",
    b: '<body bg="yellow">',
    c: '<body style="background-color:yellow;">',
    d: "<body background='yellow'>",
    correct: "c"
  },

  question7:
  {
    ques: "Choose the correct HTML element to define important text",
    a: "<important>",
    b: "<b>",
    c: "<strong>",
    d: "i",
    correct: "c"
  },

  question8:
  {
    ques: "Choose the correct HTML element to define emphasized text?",
    a: "<em>",
    b: "<italic>",
    c: "<u>",
    d: "<i>",
    correct: "a"
  },

  question9:
  {
    ques: "Which character is used to indicate an end tag?",
    a: "^",
    b: "<",
    c: "/",
    d: "*",
    correct: "c"
  },

  question10:
  {
    ques: "What is the correct HTML for making a checkbox?",
    a: "<checkbox>",
    b: "<check>",
    c: '<input type="check">',
    d: '<input type="checkbox">',
    correct: "d"
  }

};

let i = 1;
let total = 0;

for (let question of Object.keys(questions)) {
  console.log("\n" + i + "- " + questions[question]['ques'] + "\n");
  console.log("a- " + questions[question]['a']);
  console.log("b- " + questions[question]['b']);
  console.log("c- " + questions[question]['c']);
  console.log("d- " + questions[question]['d'] + "\n");

  const userInput = input();

  if (validOptions.indexOf(userInput) == -1) {
    console.log("\nInvalid Option");
    console.log("Score=" + 0);
  }

  else if (validOptions.indexOf(userInput) != -1) {
    if (userInput == questions[question]['correct']) {
      total++;
      console.log("\nScore = " + 1);
    }

    else {
      console.log("\nScore = " + 0);
    }

    console.log("Your Answer - " + questions[question][userInput]);
    console.log("Correct Answer - " + questions[question][questions[question]['correct']] + "\n");
  }

  i++;
}

console.log("Total Score-" + total + "\n");
console.log("Correct Answers-" + total + "\n");

