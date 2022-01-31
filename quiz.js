// Done:Press 'start' button to start timer with 30 seconds and display first question
//Done:display the question in a text box
//Done:display the answers in unordered list
//Done:select answer on click of mouse button
//To DO:
//advance to next question 
//add 5 seconds if the answer is right 
//deduct 5 seconds if answer is incorrect
//total seconds left = score
//record high score and display with player's initials
//

 // if (this.textContent=rightAnswer);
 



var count = 0
var time = 5
var player = (playerInit)
// var highScore = ()

document.getElementById("startQuiz").addEventListener("click", startQuiz)

//Object creating questions, answers and correct answer
const quizQuestion = [
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Dan Quayle",
      b: "Steve Jobs",
      c: "Brendan Fraser",
      d: "Brendan Eich",
    },
    rightAnswer: "d"
  },

  {
    question: "Which of the following is not a data type?",
    answers: {
      a: "boolean",
      b: "number",
      c: "string",
      d: "function",
    },
    rightAnswer: "d"
  },

  {
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },

  {
    question: "Which does not indicate a composite data type?",
    answers: {
      a: "Object",
      b: "Array",
      c: "Boolean",
      d: "Function",
    },
    rightAnswer: "c"
  },

  {
    question: "What does CSS stand for?",
    answers: {
      a: "Class Source Script",
      b: "Cascading Style Sheet",
      c: "Computer Software Script",
      d: "Class Software Script",
    },
    rightAnswer: "b"
  },

  {
    question: "What does HTML stand for?",
    answers: {
      a: "Hyper Test Markup Language",
      b: "Hyperfast Text Markup Language",
      c: "Hierarchical Text Markup Language",
      d: "Hyper Text Markup Language",
    },
    rightAnswer: "d"
  },

  {
    question: "What is the correct syntax for 'Function'?",
    answers: {
      a: "functionName.Function(Parameter1, Parameter2)",
      b: "function functionName (Parameter1, Parameter2)",
      c: "function.functionName (Parameter1, Parameter2)",
      d: "function|functionName (Parameter1, Parameter2)",
    },
    rightAnswer: "b"
  },
  
  // {
  //   question: "Which indicates an array?",
  //   answers: {
  //     a: "[a, b, c, d, e, f]",
  //     b: "/e. g. b. d. f./",
  //     c: "<a: b: c: d:>",
  //     d: "|d, e, f, g|",
  //   },
  //   rightAnswer: "a"
  // },
  
  // {
  //   question: "Which indicates an array?",
  //   answers: {
  //     a: "[a, b, c, d, e, f]",
  //     b: "/e. g. b. d. f./",
  //     c: "<a: b: c: d:>",
  //     d: "|d, e, f, g|",
  //   },
  //   rightAnswer: "a"
  // },
  
  // {
  //   question: "Which indicates an array?",
  //   answers: {
  //     a: "[a, b, c, d, e, f]",
  //     b: "/e. g. b. d. f./",
  //     c: "<a: b: c: d:>",
  //     d: "|d, e, f, g|",
  //   },
  //   rightAnswer: "a"
  // },
   
];

function startQuiz (i) {
  document.getElementById("question").textContent=quizQuestion[i].question;
  document.getElementById("a").textContent=quizQuestion[i].answers.a
  document.getElementById("b").textContent=quizQuestion[i].answers.b
  document.getElementById("c").textContent=quizQuestion[i].answers.c
  document.getElementById("d").textContent=quizQuestion[i].answers.d
  
  for (let count = quizQuestion; count <quizQuestion.length; count++) {
    const element = quizQuestion[count];
  }

  // function endGame 
  var timer = setInterval(() => {
    document.getElementById('timer').textContent=time
    time-- 
    if (time == 0 ){ 
      clearInterval (timer);
      (window.alert("Game Over!"), time == 0)
      window.prompt("type your initials")
      document.getElementById(playerInit).textContent=player[pl]; 
    }  
  }, 1000);
  for (var i =0; i<quizQuestion.length;i++){
    document.getElementById("question").textContent=quizQuestion[i].question
  // function userClick (rightAnswer)
};
}
