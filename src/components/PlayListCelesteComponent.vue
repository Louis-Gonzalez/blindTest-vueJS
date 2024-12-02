<script setup>
    defineProps({
        msgCeleste: {
        type: String,
        required: true,
        },
    })
</script>

<template>
    <div class="">
        <h1 class="green">{{ msgCeleste }}</h1>
    </div>
</template>

<style scoped>

</style>