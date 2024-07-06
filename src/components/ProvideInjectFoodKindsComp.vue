<template>
  <p>ProvideInjectFoodKindsComp Component</p>
  <p>Different Kinds of Food:</p>
  <p><mark>In this application, food2 data is provided inside "App.vue", and injected inside 
    "ProvideInjectFoodKindsComp.vue" component so that it can be shown here:</mark></p>
  
  <div :key="x" v-for="x in foods2">
    <img :src="x.imgUrl">
    <p class="pName">{{ x.name }}</p>
  </div>
</template>

<script>
  export default {
    inject: ['foods2']
  }
</script>

<style scoped>
  div {
    margin: 10px;
    padding: 10px;
    display: inline-block;
    width: 80px;
    background-color: #28e49f47;
    border-radius: 10px;
  }

  .pName {
    text-align: center;
    margin: 30px 0 0 0;
  }

  img {
    width: 100%;
  }
</style>