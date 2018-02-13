<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>Animations (CSS Classes)</h1>
        <hr>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br><br>

        <!-- Choose type of animation -->
        <div class="form-group">
          <label for="sel">Select an animation for first div:</label>
          <select id="sel" v-model="alertAnimation" class="form-control">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
          </select>
        </div>
        <br><br>

        <transition :name="alertAnimation">
          <!-- Only with 1 element -->
          <div class="alert alert-info" v-if="show">DIV 1 fades OR slides in and out depending on input.</div>
        </transition>

        <!-- When using both 'transition' and 'animation'... -->
        <!-- ...add 'type=' to tell Vue which duration to use -->
        <transition name="slide" type="animation">
          <div class="alert alert-danger" v-if="show">DIV 2 slides AND fades in and out per CSS classes.</div>
        </transition>

        <!-- Use 'appear' attribute to begin animation when initially attached to the DOM -->
        <transition name="fade" appear>
          <div class="alert alert-success" v-if="show">DIV 3 animates with loading DOM with "appear" attribute.</div>
        </transition>

        <!-- Override default classes with 'animate.css' -->
        <transition enter-class="" enter-active-class="animated slideInLeft"
                    leave-class="" leave-active-class="animated zoomOut" appear>
          <div class="alert alert-warning" v-if="show">DIV 4 has 'Animate.CSS' overriding default classes.</div>
        </transition>

        <!-- Alternate between 2 elements -->
        <!-- Set 'mode=' to 'out-in' or 'in-out' -->
        <!-- Use 'v-if' and 'v-else' because 'v-show' will not work here -->
        <!-- Use 'key=' to differentiate the <div> elements their classes -->
        <transition :name="alertAnimation" mode="out-in" appear>
          <div class="alert alert-success" v-if="show" key="success">DIV 5a will alternate with DIV 5b.</div>
          <div class="alert alert-danger" v-else key="danger">DIV 5b will alternate with DIV 5a.</div>
        </transition>

      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <!-- Image of CSS transition classes -->
        <img src="./assets/Transition-CSS-Classes.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        alertAnimation: 'fade',
      };
    },
  };
</script>

<style scoped>
  /* Attached for 1 frame in the beginning only */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
    /* This is not used because '1' is the default and will immediately over-take '.fade-enter'
    /* opacity: 1; */
  }

  .fade-leave {
    /* '1' is the default, so this is not necessary */
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    /* Not necessary because already defined in keyframe */
    /* transform: translateY(20px); */

    /* 'opacity' can be animated in keyframes */
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }

  .slide-leave {
    opacity: 1;   /* Not necessary because it's the default */
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(100px);
      /* opacity: 0; */
    }
    to {
      transform: translateY(0);
      /* opacity: 1; */
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      /* opacity: 1; */
    }
    to {
      transform: translateY(100px);
      /* opacity: 0; */
    }
  }

  img {
    margin: 20px auto;
  }
</style>
