<template>
    <p>HookErrorCapturedComp Component</p>
    <p>This is the component</p>
    <button @click="throwError">Throw Error</button>
</template>

<script>
export default {
  methods: {
    throwError() {
      this.$refs.notExistObjEl.innerHTML = "Some text for notExistObjEl";
    }
  }
}
</script>