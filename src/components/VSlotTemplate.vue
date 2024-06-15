<template>
    <h3>VSlot Template</h3>

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
        background-color: lightgreen;
    }
</style>   