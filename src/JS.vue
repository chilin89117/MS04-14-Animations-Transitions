<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>Animations (JS Hooks)</h1>
        <hr>
        <button class="btn btn-primary" @click="load=!load">Load / Remove Element</button>
        <br><br>

        <!-- JS event hooks where ':css="false"' tells Vue not to look for CSS classes -->
        <transition @before-enter="beforeEnter" @enter="enter"
                    @after-enter="afterEnter" @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave" @leave="leave"
                    @after-leave="afterLeave" @leave-cancelled="leaveCancelled" :css="false">
          <div id="one" v-if="load"></div>
        </transition>

        <br>
        <button @click="leaveCancelled" class="btn btn-danger">Cancel Leave</button>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <!-- Image of JS transition event hooks -->
        <img src="./assets/Transition-JS-Hooks.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        load: false,      // Do not show div initially
        startWidth: 0,
        finalWidth: 0,
        rounds: 50,       // Number of loops animation runs
        grow: null,       // 'setInterval' function to increase width
        shrink: null,     // 'setInterval' function to decrease width
      };
    },
    methods: {
      beforeEnter(el) {
        console.log('"before-enter" event triggered!');
        this.startWidth = 0;
        el.style.width = this.startWidth + 'px';
      },

      enter(el, done) {
        console.log('"enter" event triggered!');
        let i = 1;
        this.grow = setInterval(() => {
          el.style.width = (this.startWidth + i * 10) + 'px';
          i++;
          if(i > this.rounds) {
            this.finalWidth = this.startWidth + (i - 1) * 10;
            clearInterval(this.grow);
            done();   // Needed because there's no CSS timing to tell Vue when animation is done (especially if there's asynchronous code)
          }
        }, 50);
      },

      afterEnter(el) {
        console.log('"after-enter" event triggered!');
      },

      enterCancelled(el) {
        console.log('"enter-cancelled" event triggered!');
      },

      beforeLeave(el) {
        console.log('"before-leave" event triggered!');
        el.style.width = this.finalWidth + 'px';
      },

      leave(el, done) {
        console.log('"leave" event triggered!');
        let j = 1;
        this.shrink = setInterval(() => {
          el.style.width = (this.finalWidth - j * 10) + 'px';
          j++;
          if(j > this.rounds) {
            clearInterval(this.shrink);
            done();   // (see 'enter()' above)
          }
        }, 50);
      },
      afterLeave(el) {
        console.log('"after-leave" event triggered!');
      },

      leaveCancelled(el) {
        console.log('"leave-cancelled" event triggered!');
        clearInterval(this.shrink);
      },
    },
  };
</script>

<style scoped>
  div#one {
    width: 0px;
    height: 100px;
    background-color: lime;
  }

  img {
    margin: 20px auto;
  }
</style>
