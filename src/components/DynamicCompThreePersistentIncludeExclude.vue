<template>
    <div :style="{ backgroundColor: bgColor }">
        <p>Component: DynamicCompThreePersistentIncludeExclude</p>
        <p>Choose a new background-color:</p>
        <input type="color" v-model="bgColor">
        <strong>{{ this.bgColor }}</strong>
    </div>
</template>

<script>
  export default {
    // name must be used with include/exclude attributes
    name: 'DynamicCompThreePersistentIncludeExclude',
    data () {
      return {
        bgColor: ''
      }
    }
  }
</script>

<style></style> 