<template>
    <p>HookCreatedComp Component</p>
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
  created() {
		this.text = 'initial text';
    console.log("created: The component just got created.");
  }
}
</script>