let game = {
  userAnswer: null,
  questionCounter: 0,

  init() {
    console.log("Отвечайе на вопросы и зарабатывайте баллы");
    console.log(
      "Чтобы начать игру наберите game.run() и нажмите Enter \nВыйти из игры в любой момент - нажмите Esc"
    );
  },

  askQuestions() {
    if (this.questionCounter < questions.length) {
      this.userAnswer = prompt(questions[this.questionCounter].q);
      this.checkAnswer();
    } else {
      console.log("AWESOME! That's it. Your final score " + score.scoreCounter);
    }
  },

  checkAnswer() {
    if (this.userAnswer === null) {
      console.log("Game over");
      return;
    }

    if (this.userAnswer === questions[this.questionCounter].a) {
      this.feedBack(true);
    } else {
      this.feedBack(false);
    }
  },

  feedBack(isTrue) {
    if (isTrue) {
      score.countTheScore();
      console.log("Correct " + "your score " + score.scoreCounter);
      this.questionCounter++;
      this.askQuestions();
    } else {
      console.log("Wrong " + "your score " + score.scoreCounter);
      this.questionCounter++;
      this.askQuestions();
    }
  },

  run() {
    this.askQuestions();
  }
};

game.init();
