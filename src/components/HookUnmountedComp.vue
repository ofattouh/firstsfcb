<template>
    <p>HookUnmountedComp Component</p>
    <p>When this component is removed from the DOM tree, the unmounted() function is called. 
      In this example, we create console.log() message when this component is removed.</p>
</template>

<script>
export default {
  unmounted() {
    console.log("HookUnmountedComp component is removed (unmounted)!");
  }
}
</script>      