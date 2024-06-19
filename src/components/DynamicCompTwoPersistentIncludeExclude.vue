<template>
    <div>
        <p>Component: DynamicCompTwoPersistentIncludeExclude</p>
        <input type="text" v-model="msg" placeholder="Write something...">
        <p>Your message:</p>
        <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<script>
  export default {
    // name attribute must be used with include/exclude attributes
    name: 'DynamicCompTwoPersistentIncludeExclude',
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