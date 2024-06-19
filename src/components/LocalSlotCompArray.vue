<template>
    <slot 
    v-for="x in foods" 
    :key="x" 
    :foodName="x"
    ></slot>
</template>

<script>
export default {
    data() {
        return {
            foods: ['Apple 2','Pizza 2','Rice 2','Fish 2','Cake 2']
        }
    }
}
</script>

<style></style>       