<template>
  <p>TemplateRefComp4 Component</p>
  <p>In this example, Click the button to reveal the 3rd list element stored as array element inside $refs object.</p>
  <button @click="getValue">Get the 3rd list element</button><br>

  <ul>
    <li 
      v-for="x in liTexts" 
      :key="x"
      ref="liEl"
    >
      {{ x }}
    </li>
  </ul>

  <pre>{{ thirdEl }}</pre>
</template>

<script>
  export default {
    data() {
      return {
        thirdEl: ' ',
        liTexts: ['Apple','Banana','Kiwi','Tomato','Lichi']
      }
    },
    methods: {
      getValue() { 
        this.thirdEl = this.$refs.liEl[2].innerHTML;
        console.log("this.$refs.liEl = ", this.$refs.liEl);
      }
    }
  };
</script>

<style>
  pre {
    background-color: lightgreen;
    display: inline-block;
    font-size: 20px;
  }
</style>