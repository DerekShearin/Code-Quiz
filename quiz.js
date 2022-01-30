// Press 'start' button to start timer and display first question
//display the question in a text box
//display the answers in unordered list
//select answer on release of mouse button 
//deduct x seconds if answer is incorrect
//press high score button to display the high score
// var highScore = ()
// var person = "Will Smith";
// if highscore > 


var rightAnswer = true
var count = 0
var time = 30

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
  },{
    question: "Which does not indicate a composite data type?",
    answers: {
      a: "Object",
      b: "Array",
      c: "Boolean",
      d: "Function",
    },
    rightAnswer: "c"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },{
    question: "Which indicates an array?",
    answers: {
      a: "[a, b, c, d, e, f]",
      b: "/e. g. b. d. f./",
      c: "<a: b: c: d:>",
      d: "|d, e, f, g|",
    },
    rightAnswer: "a"
  },
   
];

// for (var i =0; i<quizQuestion.length;i++){
//    document.getElementById("question").textContent=quizQuestion[i].question
// }
document.getElementById("startQuiz").addEventListener("click", startQuiz)

function startQuiz () {
  document.getElementById("question").textContent=quizQuestion[count].question
  document.getElementById("a").textContent=quizQuestion[0].answers.a
  document.getElementById("b").textContent=quizQuestion[0].answers.b
  document.getElementById("c").textContent=quizQuestion[0].answers.c
  document.getElementById("d").textContent=quizQuestion[0].answers.d
  // document.getElementById(button.startQuiz).addEventListener("click", insertQuestion (h2) )
  for (let index = 0; index <array.length; index++) {
    const element = array[index];
  }

  setInterval(() => {
    document.getElementById('timer').textContent=time
    time--
    if (time == 0 ){
      // clearInterval(time);
      window.alert("Game Over!");
      var player = window.prompt("type your initials");
    } 
    // console.log(player)
  }, 1000);
} 
function userClick (){
  if (this.textContent=rightAnswer[2])
  console.log(this.textContent)
}
// document.getElementById("a").addEventListener("click", userClick);
// document.getElementById("b").addEventListener("click", userClick);
// document.getElementById("c").addEventListener("click", userClick);
// document.getElementById("d").addEventListener("click", userClick);

