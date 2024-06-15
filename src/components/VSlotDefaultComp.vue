<template>
    <h3>VSlot Default Component</h3>

    <div>
        <slot></slot>
    </div>

    <div>
        <slot name="bottomSlot"></slot>
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