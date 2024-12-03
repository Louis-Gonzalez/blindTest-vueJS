<script setup>
  import { ref } from 'vue';
  import { PlaylistList } from '@/assets/js/playlistList.js';

  // Récupération des playlists via la méthode statique
  const playlists = ref(PlaylistList.getPlaylists());
</script>

<template>
  <section class="wrapper">
    <div class="title">
      <h1>This is a playlist page!</h1>
    </div>
    <div class="wrapper2">
      <div v-for="(playlist, index) in playlists" :key="index" class="img-home margin1">
        <h2>{{ playlist.namePlaylist }}</h2>
        <a :href="playlist.linkPlaylist">
          <img :alt="`Playlist image for ${playlist.namePlaylist}`" class="img-home" :src="playlist.imgPlaylist" />
        </a>
      </div>
    </div>
  </section>
</template>


<style scoped>
  .wrapper2 {
  display: flex; /* Activer Flexbox */
  flex-wrap: wrap; /* Autoriser le retour à la ligne */
  justify-content: center; /* Centrer horizontalement */
  align-items: flex-start; /* Aligner les éléments au début verticalement */
  gap: 1rem; /* Ajouter de l'espacement entre les éléments */
  width: 100%;
  padding: 1.25rem; /* Ajouter un peu d'espace intérieur */
  box-sizing: border-box; /* Inclure padding et bordures dans les dimensions */
}
  .margin1{
    margin: 1rem;
  }
</style>
