<template>
  <p>HookBeforeUnmountComp Component</p>
  <p ref="pEl">Strawberries!</p>
</template>
  
<script>
  export default {
    beforeUnmount() {
      console.log("Hook beforeUnmount: The text inside the p-tag is: " + this.$refs.pEl.innerHTML);
    }
  }
</script>   