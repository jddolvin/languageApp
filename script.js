let questions = [
  {
    title: "katze",
    alternatives: ["dog", "cat", "bird", "fish"],
    correctAnswer: 1,
  },
  {
    title: "vogel",
    alternatives: ["mouse", "hamster", "lizard", "bird"],
    correctAnswer: 3,
  },
  {
    title: "ratte",
    alternatives: ["cat", "fish", "rat", "shark"],
    correctAnswer: 2,
  },
  {
    title: "fliegen",
    alternatives: ["fly", "puma", "fish", "dog"],
    correctAnswer: 0,
  },
  {
    title: "hund",
    alternatives: ["dog", "cat", "hunt", "mouse"],
    correctAnswer: 0,
  },
  {
    title: "wagen",
    alternatives: ["wheelbarrow", "car", "wagon", "bicycle"],
    correctAnswer: 1,
  },
];

let app = {
  start: function () {
    this.currentPosition = 0;
    this.score = 0;

    let alternatives = document.querySelectorAll(".alternative");

    alternatives.forEach((alt, index) => {
      alt.addEventListener("click", () => {
        this.checkAnswer(index);
      });
    });
    this.updateStats();
    this.showQuestion(questions[this.currentPosition]);
    let resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
      this.resetScore();
    });
  },
  showQuestion: function (question) {
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = question.title;
    let alternatives = document.querySelectorAll(".alternative");

    alternatives.forEach((alt, index) => {
      alt.textContent = question.alternatives[index];
    });
  },
  checkAnswer: function (userAnswer) {
    let currentQuestion = questions[this.currentPosition];

    if (currentQuestion.correctAnswer == userAnswer) {
      console.log("Correct");
      this.score++;
      this.showResult(true);
    } else {
      console.log("Wrong");
      this.showResult(false);
    }
    this.updateStats();
    this.increasePosition();
    this.showQuestion(questions[this.currentPosition]);
  },

  increasePosition: function () {
    this.currentPosition++;
    if (this.currentPosition == questions.length) {
      this.currentPosition = 0;
    }
  },

  updateStats: function () {
    let scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Your score: ${this.score}`;
  },

  showResult: function (isCorrect) {
    let resultDiv = document.getElementById("result");
    let result = "";
    isCorrect ? (result = "Correct Answer!") : (result = "Wrong Answer!");
    if (result == "Wrong Answer!") {
      let currentQuestion = questions[this.currentPosition];
      let correctAnswerIndex = currentQuestion.correctAnswer;
      let correctAnswerText = currentQuestion.alternatives[correctAnswerIndex];
      result = `Wrong! Correct answer: ${correctAnswerText}`;
    }
    resultDiv.textContent = result;
  },

  resetScore: function () {
    this.score = 0;
    this.updateStats();
  },
};

app.start();
