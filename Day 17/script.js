const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: "Delhi"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Earth", "Saturn", "Neptune"],
    correctAnswer: "Jupiter"
  },
  // Add more questions here...
];
let currentQuestion = 0;
let score = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const submitBtn = document.getElementById("submit-btn");
const resultEl = document.getElementById("result");
function displayQuestion() {
  questionEl.innerHTML = questions[currentQuestion].question;
  answersEl.innerHTML = "";
  for (const answer of questions[currentQuestion].answers) {
    answersEl.innerHTML += `<label><input type="radio" name="answer" value="${answer}"> ${answer}</label><br>`;
  }
}
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
    resultEl.innerHTML = "Correct!";
  } else {
    resultEl.innerHTML = "Incorrect!";
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    submitBtn.innerHTML = "Finish";
  }
  if (currentQuestion === questions.length + 1) {
    alert(`You scored ${score} out of ${questions.length}`);
  } else {
    displayQuestion();
  }
}
submitBtn.addEventListener("click", checkAnswer);
displayQuestion();