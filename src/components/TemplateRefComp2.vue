<template>
  <p>TemplateRefComp2 Component</p>
  <p ref="p1">Click the button to copy this text into the paragraph below.</p>
  <button @click="transferText">Transfer text</button>
  <p ref="p2">...</p>
</template>

<script>
  export default {
    methods: {
      transferText() { 
        this.$refs.p2.innerHTML = this.$refs.p1.innerHTML;
      }
    }
  };
</script>