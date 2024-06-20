<template>
  <div>
    <p>Component: TeleportCompTwo</p>
    <p>This is the inside of the component.</p>

    <Teleport to="body">
      <div 
        id="redDiv" 
        @click="toggleVal = !toggleVal" 
        :style="{ backgroundColor: bgColor }"
      >
        Teleported Content 2 to body tag (Added as last Tag)<br>
        Click me!
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleVal: true
    }
  },
  computed: {
    bgColor() {
      if (this.toggleVal) {
        return 'lightpink'
      }
      else {
        return 'lightgreen'
      }
    }
  }
}
</script>

<style scoped>
  #redDiv {
    margin: 20px;
    padding: 20px;
    display: inline-block;
    width: 340px;
  }

  #redDiv:hover {
    cursor: pointer;
  }
</style>