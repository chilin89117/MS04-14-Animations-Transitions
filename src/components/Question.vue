<template>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title text-center">{{question}}</h3>
    </div>
    <div class="panel-body">
      <div class="col-xs-12 col-sm-6 text-center">
        <button class="btn btn-primary btn-lg"
                @click="onAns(btnData[0].correct)">{{btnData[0].answer}}</button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button class="btn btn-primary btn-lg"
                @click="onAns(btnData[1].correct)">{{btnData[1].answer}}</button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button class="btn btn-primary btn-lg"
                @click="onAns(btnData[2].correct)">{{btnData[2].answer}}</button>
      </div>
      <div class="col-xs-12 col-sm-6 text-center">
        <button class="btn btn-primary btn-lg"
                @click="onAns(btnData[3].correct)">{{btnData[3].answer}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  const MODE_PLUS = 1;
  const MODE_MINUS = 2;

  export default{
    data() {
      return {
        question: 'Oops, an error ocurred :/',
        btnData: [
          {correct: true, answer: 0},
          {correct: false, answer: 0},
          {correct: false, answer: 0},
          {correct: false, answer: 0},
        ],
      };
    },
    methods: {
      genQuestion() {
        const firstNum = this.genRndNum(1, 100);
        const secondNum = this.genRndNum(1, 100);
        const modeNum = this.genRndNum(1, 2);

        let correctAns = 0;

        // Find the correct answer based on 2 random numbers and mode and set the question
        switch (modeNum) {
          case MODE_PLUS:
            correctAns = firstNum + secondNum;
            this.question = `What's ${firstNum} + ${secondNum}?`;
            break;
          case MODE_MINUS:
            correctAns = firstNum - secondNum;
            this.question = `What's ${firstNum} - ${secondNum}?`;
            break;
          default:
            correctAns = 0;
            this.question = 'Oops, an Error occurred :/';
        }

        // Generate random answers, except the correct answer, for each of 4 buttons
        this.btnData[0].answer = this.genRndNum(correctAns - 10, correctAns + 10, correctAns);
        this.btnData[0].correct = false;
        this.btnData[1].answer = this.genRndNum(correctAns - 10, correctAns + 10, correctAns);
        this.btnData[1].correct = false;
        this.btnData[2].answer = this.genRndNum(correctAns - 10, correctAns + 10, correctAns);
        this.btnData[2].correct = false;
        this.btnData[3].answer = this.genRndNum(correctAns - 10, correctAns + 10, correctAns);
        this.btnData[3].correct = false;

        // Randomly pick a button to be the correct answer
        const correctButton = this.genRndNum(0, 3);
        this.btnData[correctButton].correct = true;
        this.btnData[correctButton].answer = correctAns;
      },
      genRndNum(min, max, except) {
        const rndNum = Math.round(Math.random() * (max - min)) + min;
        console.log('min=' + min, 'max=' + max, 'rndNum=' + rndNum);
        if (rndNum == except) {
          return this.genRndNum(min, max, except);
        }
        return rndNum;
      },
      onAns(isCorrect) {
        this.$emit('answered', isCorrect);
      },
    },
    created() {
        this.genQuestion();
    },
  }
</script>

<style scoped>
  button {
    margin: 10px;
  }
</style>
