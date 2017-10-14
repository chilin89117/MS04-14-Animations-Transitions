<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

        <transition name="flip" mode="out-in">

          <component :is="mode" @answered="answered"
                     @nextQuestion="mode='app-question'"></component>

        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  import Question from './components/Question.vue';
  import Answer from './components/Answer.vue';

  export default {
    data() {
      return {
        mode: 'app-question',
      };
    },
    methods: {
      answered(isCorrect) {   // Determine which component to show
        if (isCorrect) {
          this.mode = 'app-answer';
        } else {
          this.mode = 'app-question';
          alert('Wrong, try again!');
        }
      },
    },
    components: {
      appQuestion: Question,
      appAnswer: Answer,
    },
  };
</script>

<style>
  .flip-enter {
    /* This part is optional */
    transform: rotateY(0deg);
  }

  .flip-enter-active {
    animation: flip-in 1s ease-out forwards;
  }

  .flip-leave {
    /* This part is optional */
    transform: rotateX(0deg);
  }

  .flip-leave-active {
    animation: flip-out 1s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
      opacity: 1;
    }
    to {
      transform: rotateY(90deg);
      opacity: 0;
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
      opacity: 0;
    }
    to {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }


</style>
