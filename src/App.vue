<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
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
          <div class="alert alert-info" v-if="show">This div will fade OR slide in and out.</div>
        </transition>

        <!-- When using both 'transition' and 'animation'... -->
        <!-- ...add 'type=' to tell Vue which duration to use -->
        <transition name="slide" type="animation">
          <div class="alert alert-danger" v-if="show">This div will slide AND fade in and out.</div>
        </transition>

        <!-- Use 'appear' attribute to begin animation when initially attached to the DOM -->
        <transition name="fade" appear>
          <div class="alert alert-success" v-if="show">This div will animate with loading DOM</div>
        </transition>

        <!-- Override default classes with 'animate.css' -->
        <transition enter-class="" enter-active-class="animated slideInLeft"
                    leave-class="" leave-active-class="animated zoomOut" appear>
          <div class="alert alert-warning" v-if="show">This div has default classes overridden.</div>
        </transition>

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

<style>
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
</style>
