<template>
    <p class="message">メッセージ：{{ msg }}</p>
</template>

<script>
    export default {
        data() {
            return { msg: "HELLO" }
        }
    }
</script>

<style>
    .message {
        color: #42b983
    }
</style>