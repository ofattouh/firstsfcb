<template>
  <p>HookActivatedNotActivatedComp2 Component</p>
  <p>Below is a log with every time the 'activated', 'deactivated', 'mounted' or 'unmounted' hooks run:</p>
  <ol ref="olEl" class="activatednotactivated"></ol>
  <p>You can also see when these hooks run in the console.</p>
</template>
  
<script>
export default {
  mounted() {
    this.logHook("HookActivatedNotActivatedComp2 mounted");
  },
  unmounted() {
    this.logHook("HookActivatedNotActivatedComp2 unmounted");
  },
  activated() {
    this.logHook("HookActivatedNotActivatedComp2 activated");
  },
  deactivated() {
    this.logHook("HookActivatedNotActivatedComp2 deactivated");
  },
  methods: {
    logHook(hookName) {
      console.log(hookName);
      const liEl = document.createElement("li");
      liEl.innerHTML = hookName;
      this.$refs.olEl.appendChild(liEl);
    }
  }
}
</script>

<style>
  ol.activatednotactivated li {
    background-color: lightcoral;
    margin-top: 5px;
  }
</style>