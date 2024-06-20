<template>
  <div>
      <p>Component: TeleportComp</p>
      <p>This is the inside of the component.</p>

      <Teleport to="body">
        <br><hr>
        <div id="redDiv">Teleported Content to body tag (Added as last Tag)</div>
      </Teleport>
  </div>
</template>

<script></script>

<style scoped>
  #redDiv {
    background-color: lightcoral;
    margin: 20px;
    padding: 20px;
    display: inline-block;
  }
</style>