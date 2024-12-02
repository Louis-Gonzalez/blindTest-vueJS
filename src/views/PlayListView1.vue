<script setup>
    import PlayListCelesteComponent from '@/components/PlayListCelesteComponent.vue';
    import BlindTestComponent from '@/components/BlindTestComponent.vue';
</script>

<template>
    <section class="wrapper">
        <div class="title">
            <h1>This is a playlist1 !</h1>
        </div>
        <div class="content">
            <PlayListCelesteComponent msgCeleste="Page de la playlist 1 de Céleste" />
            <BlindTestComponent />
        </div>
        <div class="img-home">

        </div>
    </section>
</template>

<style>
    
</style>
