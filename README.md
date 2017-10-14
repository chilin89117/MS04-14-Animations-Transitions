# MS04-10 Transitions (No Laravel)
**Note**: edit `main.js` to switch among the following:

* Transitions using Vue's CSS classes (`CSS.vue`)
* Transitions using JavaScript event hooks (`JS.vue`)
* Transitions with dynamic components / Transition groups (`Components.vue`)
* A Quiz demo app (`Quiz.vue`)
 
## `CSS.vue`
* The classes are:
	* `name-enter` (1 frame only)
	* `name-enter-active`
	* `name-leave` (1 frame only)
	* `name-leave-active`
* Use `@keyframes` to animate the transitions
* Use `type=""` when transitions and animations have different durations
* Use `appear` attribute when initially attached to DOM
* Can be over-ridden by other libraries such as `Animate.CSS`
* Use `mode=""` when transitioning between 2 elements (`in-out` or `out-in`)

## `JS.vue`
* The event hooks are:
	* `before-enter`
	* `enter`
	* `after-enter`
	* `enter-cancelled`	
	* `before-leave`
	* `leave`
	* `after-leave`
	* `leave-cancelled`
* Event hooks then call methods in Vue instance
* Use `:css="false"` to avoid looking for CSS classes

## `Components.vue`
* Use `<transition>` to toggle between components
* Use `<transition-group>` for multiple elements
	* new CSS class `.name-move` for elements that need to be moved
	* use `:key=""` to identify the elements
	* add `position: absolute;` to `.name-leave-active` class to allow remaining elements to move into place while the deleted element animates out 

## `Quiz.vue`
* A quiz app that rotates 2 components in and out

#### End of Section 14.

