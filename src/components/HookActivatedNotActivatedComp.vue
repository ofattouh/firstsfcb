<template>
  <p>HookActivatedNotActivatedComp Component</p>
  <p>Below is a log with every time the 'mounted' or 'activated' hooks run.</p>
  <ol ref="olEl" class="activatednotactivated"></ol>
  <p>You can also see when these hooks run in the console.</p>
</template>
  
<script>
export default {
  mounted() {
    console.log("HookActivatedNotActivatedComp mounted");
    const liEl = document.createElement("li");
    liEl.innerHTML = "HookActivatedNotActivatedComp mounted";
    this.$refs.olEl.appendChild(liEl);
  },
  activated() {
    console.log("HookActivatedNotActivatedComp activated");
    const liEl = document.createElement("li");
    liEl.innerHTML = "HookActivatedNotActivatedComp activated";
    this.$refs.olEl.appendChild(liEl);
  }
}
</script>

<style>
  ol.activatednotactivated li {
    background-color: lightcoral;
    margin-top: 5px;
  }
</style>