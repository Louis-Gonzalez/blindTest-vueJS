<script setup>
  import { ref } from 'vue';

  // Importation du fichier audio
  import soundFile from '@/assets/sound/alert.mp3';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

  // Référence à l'élément audio
  const audioElement = ref(null);

  // Méthode pour jouer le son
  const playSound = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    if (audioElement.value) {
      // Supprime le mode muet
      audioElement.value.muted = false;

      // Joue l'audio
      audioElement.value.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

</script>

<template>
  <div class="">
    <h1 class="green">{{ msg }}</h1>
    <p>
      The aim of the game is to find the piece of music before the time runs out. Extracts last 20 seconds. Good luck to all. 
    </p>
    <p>
      <a href="#" @click="playSound">Click here for hear the timeout sound</a>
      <audio ref="audioElement" :src="soundFile" preload="auto"></audio>
    </p>
  </div>
</template>

<style scoped>

</style>
