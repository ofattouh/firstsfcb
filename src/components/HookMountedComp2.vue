<template>
	<p>HookMountedComp2 Component Form</p>
	<p>When this component is added to the DOM tree, the mounted() function is called, and we put the cursor inside
     the input element for the user to start typing.</p>

	<form @submit.prevent>
		<label>
			<p>
				Name: <input type="text" ref="inpName">
			</p>
		</label><br>

		<label>
			<p>
				Age: <input type="number">
			</p>
		</label><br>

		<button>Submit</button>
	</form>

	<p>(This form does not work, it is only here to show the mounted lifecycle hook.)</p>
</template>

<script>
  export default {
    mounted() {
      this.$refs.inpName.focus();
    }
  }
</script>