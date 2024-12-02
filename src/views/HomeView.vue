<script setup>
    import MessageComponent from '@/components/MessageComponent.vue';
</script>

<template>
    <section class="wrapper">
        <div class="title">
            <h1>Blind Test</h1>
        </div>
        <div class="content">
            <div class="message">
                <MessageComponent msg="Are you ready to play ?" />
            </div>
            <div class="img-home">
                <a href="/playlist">
                    <img alt="blindTest K7 musical" class="img-home" src="@/assets/media/img/Blind-Test-Musical.jpg" />
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Vos styles ici */
</style>