<template>
    <div> 
        <p>SlotComp.vue</p>
        <slot></slot>
    </div>

    <div>
        <p>SlotComp.vue</p>
        <slot></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        font-weight: bold;
        background-color: lightgreen;
    }
</style>   