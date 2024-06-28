<template>
    <p>HookBeforeCreateComp Component</p>
    <p>This is the component</p>
    <p id="pResult">{{ text }}</p>
</template>

<script>
export default {
	data() {
		return {
			text: '...'
		}
	},
  beforeCreate() {
		this.text = 'initial text'; // This line has no effect because Vue data property is actually not created yet
    console.log("beforeCreate: The component is not created yet");
  }
}
</script>    