<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h1>Dynamic Components & Transition Groups</h1>
        <hr>
        <h2>Dynamic components</h2>
        <button class="btn btn-primary" @click="toggleComponent">Toggle Components</button>
        <br><br>
        <transition name="slide" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-md-10 col-md-offset-1">
        <h2>Transition Group</h2>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <transition-group name="slide" class="list-group" tag="ul">
          <li class="list-group-item" v-for="(number, index) in numbers"
              :key="index" @click="removeItem(index)">{{number}}</li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  import danger from './components/DangerAlert.vue'
  import success from './components/SuccessAlert.vue'

  export default {
    components: {
      appDanger: danger,
      appSuccess: success,
    },
    data() {
      return {
        selectedComponent: 'app-danger',
        numbers: [0, 1, 2, 3,],
      };
    },
    methods: {
      toggleComponent() {
        this.selectedComponent = (this.selectedComponent == 'app-danger') ? 'app-success' : 'app-danger';
      },
      addItem() {
        // Randomly find a position within current list
        const pos = Math.floor(Math.random() * this.numbers.length);
        // Add a new number that's 1 higher than current max
        this.numbers.splice(pos, 0, Math.max(...this.numbers) + 1);
        console.log('add', this.numbers)
      },
      removeItem(index) {
        if(this.numbers.length > 1) {
          this.numbers.splice(index, 1);
          console.log('remove', this.numbers)
        }
      },
    },
  };
</script>

<style>
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
  transition: opacity 1s;
  opacity: 0;
  /* This allows remaining elements to move while the deleted item is still being animated */
  /* 'position: fixed' will also work */
  position: absolute;
}

/* New CSS class comes with <transition-group> for any element that needs to change place */
.slide-move {
  /* 'transform' here is not related to the one in 'keyframe' */
  /* This only works when elements are added because, when an item is removed, other items ... */
  /* ... have to wait for the removed item to be completedly removed (see 'slider-leave-active') */
  transition: transform 1s;
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

.list-group-item {
  cursor: pointer;
  background-color: indigo;
  color: white;
  font-weight: bold;
}
</style>
