<script>
// export default: allow data properties to be received, or imported, inside another file
export default {
  data() {
    return {
      clicks: 0,
      // foodIsFavorite is defined inside FoodItem component, 
      // isFavorite is defined inside App component (attribute: is-favorite)
      foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    countClicks() {
      this.clicks++;
    },
    toggleFavorite() { 
      this.foodIsFavorite = !this.foodIsFavorite;
    }
  },
  // props: ['foodName','foodDesc','isFavorite']
  // Add Data types for validation
  props: {
    foodName: {
      type: String,
      required: true, // Required, will show warning on console if missing
      // default: 'This is the default foodName.',  // even if there was default value 
    },
    foodDesc: {
      type: String,
      required: false, // Optional
      default: 'This is the default description.', // Default value
      // Validator function: When it returns false, it means prop value is invalid. invalid prop
      // value generates warning in the browser console when we run page in developer mode
      validator: function(value) {
        // make sure food description provided has a valid length
        if( 20 < value.length && value.length < 50 ) {
          return true;
        }
        else {
          return false; // invalid
        }
      }
    },
    isFavorite: {
      type: Boolean,
      required: false, // Optional
      default: false
    }
  }
};
</script>

<template>
  <div v-on:click="countClicks">
    <h2>
      {{ foodName }} 
      <!-- <img src="/img_quality.svg" v-show="isFavorite"> -->
      <img src="/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>

    <p id="red">You have clicked me {{ clicks }} times.</p>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
  </div>
</template>

<style>
  #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }

  img {
    height: 1.5em;
    float: right;
  }
</style>

/*
  When a component is created in the parent element, we are not allowed to change the value 
  of the prop received in the child element. So inside FoodItem.vue we cannot change the value 
  of the 'isFavorite' prop we get from App.vue. The prop is read-only from the parent: App.vue

  Props attributes are written with a dash - to separate words (kebab-case) in the template tag,
  but kebab-case is not legal in JavaScript. So instead we need to write attribute names as 
  camelCase in JavaScript: is-favorite => isFavorite

  <food-item
    food-name="Pizza"
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
    v-bind:is-favorite="false"/>

*/