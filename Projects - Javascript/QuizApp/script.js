let questions = [];
let currentIndex = 0;
let marks = 0;

function addQuestion() {
  const questionText = document.getElementById("questionInput").value;
  const optionInputs = document.querySelectorAll(".optionInput");
  const options = Array.from(optionInputs).map(input => input.value.trim());
  const correctIndex = document.getElementById("correctOptionIndex").value;
  const correctAns = options[correctIndex];

  if (questionText && options.every(opt => opt !== '')) {
    questions.push({
      question: questionText,
      options,
      correctAns
    });

    showAlert("Question added!");
    document.getElementById("questionInput").value = "";
    optionInputs.forEach(input => input.value = "");
  } else {
    showAlert("Please fill in all fields.");
  }
}

function goToQuiz() {
  if (questions.length === 0) {
    showAlert("Add at least one question to start the quiz.");
    return;
  }

  document.getElementById("addScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  startQuiz();
}

function startQuiz() {
  document.getElementById("totalQuestions").textContent = questions.length;
  loadQuestion();
}

function loadQuestion() {
  if (currentIndex >= questions.length) {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  document.getElementById("scoreText").textContent =
    `You scored ${marks} out of ${questions.length}`;
  return;
}


  const q = questions[currentIndex];
  document.getElementById("currentQuestion").textContent = currentIndex + 1;
  document.getElementById("displayQuestion").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, q.correctAns);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    marks++;
  }
  currentIndex++;
  loadQuestion();
}

function showAlert(message, type = "success") {
  const alertBox = document.getElementById("customAlert");
  const alertText = document.getElementById("alertText");

  alertText.textContent = message;
  alertBox.style.backgroundColor = type === "error" ? "#2a01b2ff" : "#013cb2ff";
  alertBox.classList.remove("hidden");

  // Auto-hide after 3 seconds
  setTimeout(() => {
    alertBox.classList.add("hidden");
  }, 3000);
}

function closeAlert() {
  document.getElementById("customAlert").classList.add("hidden");
}

function restartQuiz() {
  currentIndex = 0;
  marks = 0;

  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");

  startQuiz();
}

function goToAddScreen() {
  const confirmReset = confirm("This will clear your current quiz. Continue?");
  if (!confirmReset) return;

  // Reset quiz state
  currentIndex = 0;
  marks = 0;
  questions = [];

  // Hide result screen, show add screen
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("addScreen").classList.remove("hidden");

  // Clear all input fields
  document.getElementById("questionInput").value = "";
  const optionInputs = document.querySelectorAll(".optionInput");
  optionInputs.forEach(input => input.value = "");
  document.getElementById("correctOptionIndex").selectedIndex = 0;
}
