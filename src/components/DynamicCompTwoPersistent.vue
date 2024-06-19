<template>
    <div>
        <p>Dynamic Component Two Persistent</p>
        <input type="text" v-model="msg" placeholder="Write something...">
        <p>Your message:</p>
        <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightpink;
  }
  strong {
    background-color: yellow;
    padding: 5px;
  }
</style>