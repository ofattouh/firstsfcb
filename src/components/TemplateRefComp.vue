<template>
  <p>TemplateRefComp Component</p>
  <p>Click the button to put "Hello!" as the text in the green p element.</p>
  <button @click="changeVal">Change Text</button><br>
  <p ref="pEl" id="pEl">This is the initial text</p>
</template>

<script>
  export default {
    methods: {
      changeVal() { 
        this.$refs.pEl.innerHTML = "Hello!";
      }
    }
  };
</script>

<style>
    #pEl {
        background-color: lightgreen;
        display: inline-block;
    }
</style>     