<template>
  <p>HookMountedComp Component</p>
  <p>Right after this component is added to the DOM, the mounted() function is called and we can add code to that 
    mounted() function. In this example, console.log() message appears after this component is mounted.</p>
  <p><i>Note: The reason that this message is visible before the component is visible is because 
  console.message() is called before the browser gets to render the component to the screen.</i></p>
</template>

<script>
  export default {
    mounted() {
      console.log("HookMountedComp component is mounted!");
    }
  }
</script>