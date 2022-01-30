// Done:Press 'start' button to start timer with 30 seconds and display first question
//Done:display the question in a text box
//Done:display the answers in unordered list
//Done:select answer on click of mouse button 
//add 5 seconds if the answer is right 
//deduct 5 seconds if answer is incorrect
//record high score and display with player's initials
//total seconds left = score
 



var count = 0
var time = 29
// var highScore = ()

document.getElementById("startQuiz").addEventListener("click", startQuiz)

//Object creating questions, answers and correct answer
const quizQuestion = [
  {
    question: "Who invented Javascript?",
    answers: {
      a: "Dan Quayle",
      b: "Steve Jobs",
      c: "Brandon Frasier",
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

for (var i =0; i<quizQuestion.length;i++){
   document.getElementById("question").textContent=quizQuestion[i].question
}


function startQuiz (i) {
  document.getElementById("question").textContent=quizQuestion[count].question
  document.getElementById("a").textContent=quizQuestion[0].answers.a
  document.getElementById("b").textContent=quizQuestion[0].answers.b
  document.getElementById("c").textContent=quizQuestion[0].answers.c
  document.getElementById("d").textContent=quizQuestion[0].answers.d
  
  for (let index = quizQuestion; index <quizQuestion.length; index++) {
    const element = quizQuestion[index];
  }

  // function endGame 
  setInterval(() => {
    document.getElementById('timer').textContent=time
    time-- 
    if (time == 0 ){ 
      setTimeout(window.alert("Game Over!"))
      window.prompt("type your initials"); 
    }  
  }, 1000);
} 

function userClick (rightAnswer)
{
  // if (this.textContent=rightAnswer);
  // console.log(this.textContent)
}
// document.getElementById("a").addEventListener("click", userClick);
// document.getElementById("b").addEventListener("click", userClick);
// document.getElementById("c").addEventListener("click", userClick);
// document.getElementById("d").addEventListener("click", userClick);

