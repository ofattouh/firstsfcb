<template>
  <p>TemplateRefComp3 Component</p>
  <p>Start writing inside the input element, and text will be copied into last paragraph by use of '$refs' object.</p>
  <input ref="inputEl" @input="getRefs" placeholder="Write something..">
  <p ref="pEl"></p>
</template>

<script>
  export default {
    methods: {
      getRefs() { 
        this.$refs.pEl.innerHTML = this.$refs.inputEl.value;
      }
    }
  };
</script>