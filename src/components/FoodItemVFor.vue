<script>
  export default {
    props: ['foodName','foodDesc','isFavorite'],
    data() {
      return {
        foodIsFavorite: this.isFavorite
      }
    },
    methods: {
      toggleFavorite() {
        this.foodIsFavorite = !this.foodIsFavorite;
      }
    }
  }
</script>

<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" v-show="foodIsFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
  </div>
</template>

<style>
  img {
    height: 1.5em;
    float: right;
  }
</style>
