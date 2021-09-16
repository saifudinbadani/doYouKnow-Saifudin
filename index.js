// console.log("Saifudin Badani");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName + " to quiz 'Do You Know Saifudin.' ")

console.log("*****************************")

var questionMajor = [
  questionOne = {
  question: "What you will find Saifudin doing when he does not work? \n",
  answer: "Reading"
 },
 questionTwo = {
  question: "Write name of Saifudin's favourite street food. \n",
  answer: "Aloopuri"
 },
 questionThree = {
  question: "Where does Saifudin live right now? \n",
  answer: "Perth"
 },
 questionFour = {
  question: "Does Saifudin have any pets? \n",
  answer: "No"
 },
  questionFive = {
  question: "Which is Saifudin go to comfort movie? \n",
  answer: "Harry Potter"
 }
]

var score = 0

for (var i = 0; i < questionMajor.length; i++){
  userInput = readlineSync.question(questionMajor[i].question)
  if (userInput === questionMajor[i].answer){
    console.log("Correct!");
    score = score + 1;
    console.log("Current score: "+ score)
  } else {
    console.log("Oops! Wrong one")
    console.log("Current score: "+ score)
  }
}
console.log('-------------------------')
console.log('Your score is ' + score)