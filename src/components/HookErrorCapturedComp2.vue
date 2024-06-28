<template>
    <p>HookErrorCapturedComp2 Component</p>
    <p>This is the component</p>
    <button @click="throwError">Throw Error 2</button>
</template>

<script>
export default {
  methods: {
    throwError() {
      this.$refs.notExistObjEl2.innerHTML = "Some text for notExistObjEl2";
    }
  }
}
</script>