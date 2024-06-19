<template>
    <div>
        <img :src="imgSrc">
        <p>Dynamic Component One Persistent</p>
        <p>Choose food.</p>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_apple.svg'" /> 
            Apple
        </label>
        <label>
            <input type="radio" name="rbgFood" 
            v-model="imgSrc" :value="'img_cake.svg'" /> 
            Cake
        </label>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        imgSrc: 'img_question.svg'
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
  img {
    float: right;
    height: 60px;
    margin-top: 20px;
  }
  label:hover {
    cursor: pointer;
  }
</style>           