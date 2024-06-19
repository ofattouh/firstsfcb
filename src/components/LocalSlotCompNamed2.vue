<template>
    <slot 
        name="leftSlot2"
        :text="leftText2"
    ></slot>
    <slot 
        name="rightSlot2"
        :text="rightText2"
    ></slot>
</template>

<script>
export default {
    data() {
        return {
            leftText2: 'This text belongs to the LEFT slot 2.',
            rightText2: 'This text belongs to the RIGHT slot 2.'
        }
    }
}
</script>

<style></style> 