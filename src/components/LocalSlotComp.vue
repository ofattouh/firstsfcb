<template>
    <slot v-bind:lclData="data"></slot>
</template>

<script>
export default {
    data() {
        return {
            data: 'This is Local Data'
        }
    }
}
</script>

<style></style> 