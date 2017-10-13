<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br><br>
        <transition name="fade">
          <!-- Only with 1 element -->
          <div class="alert alert-info" v-if="show">This div will fade in and out.</div>
        </transition>
        <br><br>

        <!-- When using both 'transition' and 'animation'... -->
        <!-- ...add 'type=' to tell Vue which duration to use -->
        <transition name="slide" type="animation">
          <!-- Only with 1 element -->
          <div class="alert alert-danger" v-if="show">This div will slide/fade in and out.</div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
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
