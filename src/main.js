import Vue from 'vue'
// Transitions using CSS classes (lectures 180-193)
import App from './CSS.vue'

// Transitions using JS event hooks (lectures 194-197)
// import App from './JS.vue'

// Animating dynamic components and transition groups (lectures 198-201)
// import App from './Components.vue'

// Quiz App (lectures 202-204)
// import App from './Quiz.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
