<template>
  <p>OptionsAPICompTypeWriters Component</p>
  <p>In this example, we decrease the number of typewriters in storage with a button using Options API:</p>

  <img src="/img_typewriter.jpeg" alt="Typewriter">

  <p>Typewriters left in storage: {{ typeWriters2 }}</p>
  <button @click="remove2">Remove one</button>

  <p style="font-style: italic;">"{{ storageComment2 }}"</p>
</template>

<script>
export default {
  data() { 
    return {
      typeWriters2: 10
    };
  },
  methods: {
    remove2(){
      if(this.typeWriters2 > 0){
        this.typeWriters2--;
      }
    }
  },
  computed: {
    storageComment2(){
      if(this.typeWriters2 > 5) {
        return "Many left"
      }
      else if(this.typeWriters2 > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  }
}
</script>