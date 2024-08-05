<template>
  <p>CompositionAPICompTypeWriters Component</p>
  <p>In this example, we decrease the number of typewriters in storage with a button using Composition API:</p>

  <img src="/img_typewriter.jpeg" alt="Typewriter">
  <p>Typewriters left in storage: {{ typeWriters }}</p>

  <button @click="remove">Remove one</button>
  <p style="font-style: italic;">"{{ storageComment }}"</p>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const typeWriters = ref(10);

  function remove(){
    if(typeWriters.value > 0){
      typeWriters.value--;
    }
  }

  const storageComment = computed(
    function(){
      if(typeWriters.value > 5) {
        return "Many left"
      }
      else if(typeWriters.value > 0){
        return "Very few left"
      }
      else {
        return "No typewriters left"
      }
    }
  )
</script>