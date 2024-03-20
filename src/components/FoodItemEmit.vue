<script>
  export default {
    props: ['foodName','foodDesc','isFavorite'],
    emits: ['toggle-favorite'], // Document emit method for others to use 
    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite', this.foodName);
      }
    }
  }
</script>

  <!-- 
    With built-in $emit() method in Vue, we create custom event in child component that can be 
    captured inside parent element. Props send data from parent element to child component, and 
    $emit() is used to do the oposite: pass information from child component to parent.

    'foods' array inside App.vue has 'favorite' status, and sent as prop 'is-favorite' from 
    App.vue to FoodItemEmit.vue, we need to refer to this 'isFavorite' prop in FoodItemEmit.vue 
    from v-show where <img> element will update this image
  -->

<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" v-show="isFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button @click="toggleFavorite">Toggle Favorite</button>
  </div>
</template>

<style>
  img {
    height: 1.5em;
    float: right;
  }
</style>
