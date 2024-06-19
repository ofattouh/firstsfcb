<template>
    <slot 
        staticText="This text is static"
        :dynamicText="text"
    ></slot>
</template>

<script>
export default {
    data() {
        return {
            text: 'This text is dynamic and sent from the data property'
        }
    }
}
</script>

<style></style>  