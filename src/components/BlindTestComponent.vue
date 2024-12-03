<script setup>
    import { onMounted, ref } from 'vue';
    import { BlindTest } from '@/assets/js/BlindTest';

    // Déclare une référence pour l'instance de BlindTest
    const blindTest = ref(null);

    // Variables pour les éléments DOM
    const time = 20;
    const timerElementId = 'timer';
    const progressBarId = 'progressBar';
    const playPauseButtonId = 'playPauseButton';
    const restartButtonId = 'restart';
    const alertSoundId = 'alertSound';
    const soundTrackId = 'soundTrack';
    const responseButtonId = 'response';

    onMounted(() => {
    // Crée l'instance de BlindTest et l'assigne à la référence
    blindTest.value = new BlindTest(
        time, 
        timerElementId, 
        progressBarId, 
        playPauseButtonId, 
        restartButtonId, 
        alertSoundId, 
        soundTrackId, 
        responseButtonId
        );
    });

    // Référence à l'élément audio
    const audioElement = ref(null);

    // Méthode pour jouer le son
    const playSound = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    if (audioElement.value) {
        // Assure-toi que l'audio n'est pas muet et peut être joué
        audioElement.value.muted = false;

        // Joue l'audio
        audioElement.value.play().catch((error) => {
        console.error("Error playing audio:", error);
        });
    }
    };
</script>

<template>
    <section style ="background-color: " >
        <div>
            <div id="timer"></div>
            <div class="response-title-img">
                <div class="img-response" id="responseImg"></div>
                <div class="titleOfSound" id="response"></div>
            </div>
            <!-- <img src="@/assets/media/img/BLACKPINK_Pink-Venom.jpg" width="50%" alt=""> -->
        </div>
        <div>
            <div>
                <p class="p-page1">
                    <input class="btn-play" type="button" id="playPauseButton" value="Play">
                    <input class="btn-restart" type="button" id="restart" value="Restart">
                    <input class="btn-next" type="button" id="nextButton" value="Next">
                </p>
            </div>
            <div id="progressContainer">
                <div id="progressBar"></div>
            </div>
            <audio id="alertSound" src="/src/assets/sound/alert.mp3" preload="auto"></audio>
            <audio id="soundTrack" src="/src/assets/media/music/soundTrack100.mp3" preload="auto"></audio>
        </div>
    </section>
</template>

<style scoped>

    #progressContainer {
        width: 100%;  /* Largeur du conteneur de la barre de progression */
        background-color: #e0e0e0;  /* Couleur de fond du conteneur */
        border: 1px solid #ccc;  /* Bordure autour du conteneur */
        height: 20px;  /* Hauteur de la barre de progression */
        margin-top: 10px;  /* Espacement au-dessus de la barre de progression */
    }

    #progressBar {
        width: 100%;  /* Largeur initiale de la barre de progression */
        height: 100%;  /* Hauteur de la barre de progression */
        background-color: #43bb83;  /* Couleur de la barre de progression */
        transition: width 1s;  /* Transition pour l'animation de la largeur */
    }

    .p-homePage {
        text-align: center;
        margin-bottom: 2rem;
        color:whitesmoke;
        font-size: xx-large;
        font-weight: bold;
    }

    #timer {
        text-align: center;
        font-size: 20rem;
    }

    .p-page1 {
        text-align: center;
        margin-bottom: 2rem;
        color:whitesmoke;
        font-size: xx-large;
        font-weight: bold;
    }

    #response {
        max-width: 100%; /* Limite la largeur de la div à la taille de son conteneur */
        word-wrap: break-word; /* Permet de couper les mots trop longs pour ne pas déborder */
        overflow: hidden; /* Cache le texte qui dépasse de la div */
        white-space: normal; /* Permet au texte de passer à la ligne */
        text-align: center; /* Centre le texte à l'intérieur de la div */
        padding: 10px; /* Ajoute un peu d'espace autour du texte pour le confort visuel */
        box-sizing: border-box; /* Assure que le padding ne fait pas déborder la taille de l'élément */
        margin-bottom: 2rem;
        color: blanchedalmond;
        font-size: 7rem;
        font-weight: bold;
    }

    .img-response {
        width: 20rem; /* Limite la largeur de l'image à la taille de son conteneur */
        height: auto; /* Permet aux images de maintenir leur rapport d'aspect */
        /* display: block; */
        /* border-color: red; */
    }

    .response-title-img{
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>