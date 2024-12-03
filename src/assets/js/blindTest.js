export class BlindTest {
    constructor(time, timerElementId, progressBarId, playPauseButtonId, restartButtonId, alertSoundId, soundTrackId, responseButtonId) {
        this.time = time;  
        this.maxTime = time;  
        this.isRunning = false;
        this.hasStarted = false;  // Indicateur si le timer a déjà commencé
        this.intervalId = null;

        // Récupération des éléments HTML
        this.timerElement = document.getElementById(timerElementId);
        this.progressBar = document.getElementById(progressBarId);
        this.playPauseButton = document.getElementById(playPauseButtonId);
        this.restartButton = document.getElementById(restartButtonId);
        this.alertSound = document.getElementById(alertSoundId);
        this.soundTrack = document.getElementById(soundTrackId);
        this.responseButton = document.getElementById(responseButtonId);

        // Initialiser la liste de musique
        this.musicList = this.source();
        this.selectedMusic = null; // Propriété pour stocker la musique sélectionnée

        // Tableau pour stocker les chansons déjà jouées
        this.playedSongs = [];  

        // Initialiser les événements
        this.init();
    }

    source() {
        return [
            {name: "soundTrack1", 
            path: new URL('@/assets/media/music/soundTrack1.mp3', import.meta.url).href, 
            musicTitle: "Alan-Walker&Ava-Max_Alone.mp3", 
            img: new URL('@/assets/media/img/Alan-Walker&Ava-Max_Alone.jpg', import.meta.url).href },
            {name: "soundTrack2", 
            path: new URL('@/assets/media/music/soundTrack2.mp3', import.meta.url).href, 
            musicTitle: "Alan-Walker_Faded.mp3", 
            img: new URL('@/assets/media/img/Alan-Walker_Faded.jpg', import.meta.url).href },
            {name: "soundTrack3", 
            path: new URL('@/assets/media/music/soundTrack3.mp3', import.meta.url).href, 
            musicTitle: "Ava-Max_Kings&Queens.mp3", 
            img: new URL('@/assets/media/img/Ava-Max_Kings&Queens.png', import.meta.url).href },
            {name: "soundTrack4", 
            path: new URL('@/assets/media/music/soundTrack4.mp3', import.meta.url).href, 
            musicTitle: "Ava-Max_Sweet-but-Psycho.mp3", 
            img: new URL('@/assets/media/img/Ava-Max_Sweet-but-Psycho.jpg', import.meta.url).href },
            {name: "soundTrack5", 
            path: new URL('@/assets/media/music/soundTrack5.mp3', import.meta.url).href, 
            musicTitle: "Aya-Nakamura_Copines.mp3", 
            img: new URL('@/assets/media/img/Aya-Nakamura_Copines.jpg', import.meta.url).href },
            {name: "soundtrack6", 
            path: new URL('@/assets/media/music/soundTrack6.mp3', import.meta.url).href, 
            musicTitle: "BLACKPINK_How-You-Like-That.mp3", 
            img: new URL('@/assets/media/img/BLACKPINK_How-You-Like-That.jpg', import.meta.url).href },
            {name: "soundTrack7", 
            path: new URL('@/assets/media/music/soundTrack7.mp3', import.meta.url).href, 
            musicTitle: "BLACKPINK_Pink-Venom.mp3", 
            img: new URL('@/assets/media/img/BLACKPINK_Pink-Venom.jpg', import.meta.url).href },
            {name: "soundTrack8", 
            path: new URL('@/assets/media/music/soundTrack8.mp3', import.meta.url).href, 
            musicTitle: "Bob-Sinclar_Rock-This-Party.mp3", 
            img: new URL('@/assets/media/img/Bob-Sinclar_Rock-This-Party.jpg', import.meta.url).href },
            {name: "soundTrack9", 
            path: new URL('@/assets/media/music/soundTrack9.mp3', import.meta.url).href, 
            musicTitle: "Charli-XCX_Break-The-Rules.mp3", 
            img: new URL('@/assets/media/img/Charli-XCX_Break-The-Rules.png', import.meta.url).href },
            {name: "soundTrack10", 
            path: new URL('@/assets/media/music/soundTrack10.mp3', import.meta.url).href, 
            musicTitle: "DANCE-MONKEY_TONES-AND-I.mp3", 
            img: new URL('@/assets/media/img/DANCE-MONKEY_TONES-AND-I.jpg', import.meta.url).href },
            {name: "soundtrack11", 
            path: new URL('@/assets/media/music/soundTrack11.mp3', import.meta.url).href, 
            musicTitle: "David-Guetta&MORTEN_Kill-Me-Slow.mp3", 
            img: new URL('@/assets/media/img/David-Guetta&MORTEN_Kill-Me-Slow.jpg', import.meta.url).href },
            {name: "soundtrack12", 
            path: new URL('@/assets/media/music/soundTrack12.mp3', import.meta.url).href, 
            musicTitle: "Ed-Sheeran_Shape-of-You.mp3", 
            img: new URL('@/assets/media/img/Ed-Sheeran_Shape-of-You.jpg', import.meta.url).href },
            {name: "soundtrack13", 
            path: new URL('@/assets/media/music/soundTrack13.mp3', import.meta.url).href, 
            musicTitle: "FAUN_Federkleid.mp3", 
            img: new URL('@/assets/media/img/FAUN_Federkleid.jpg', import.meta.url).href },
            {name: "soundtrack14", 
            path: new URL('@/assets/media/music/soundTrack14.mp3', import.meta.url).href, 
            musicTitle: "GIMS&VITAA_PRENDS-MA-MAIN.mp3", 
            img: new URL('@/assets/media/img/GIMS&VITAA_PRENDS-MA-MAIN.jpg', import.meta.url).href },
            {name: "soundtrack15", 
            path: new URL('@/assets/media/music/soundTrack15.mp3', import.meta.url).href, 
            musicTitle: "GIMS_ORIGAMI.mp3", 
            img: new URL('@/assets/media/img/GIMS_ORIGAMI.jpg', import.meta.url).href },
            {name: "soundtrack16", 
            path: new URL('@/assets/media/music/soundTrack16.mp3', import.meta.url).href, 
            musicTitle: "Hass-Hass_Diljit-X-Sia.mp3", 
            img: new URL('@/assets/media/img/Hass-Hass_Diljit-X-Sia.jpg', import.meta.url).href },
            {name: "soundtrack17", 
            path: new URL('@/assets/media/music/soundTrack17.mp3', import.meta.url).href, 
            musicTitle: "Imagine-Dragons_Believer.mp3", 
            img: new URL('@/assets/media/img/Imagine-Dragons_Believer.jpg', import.meta.url).href },
            {name: "soundtrack18", 
            path: new URL('@/assets/media/music/soundTrack18.mp3', import.meta.url).href, 
            musicTitle: "Italobrothers_Stamp-On-The-Ground.mp3", 
            img: new URL('@/assets/media/img/Italobrothers_Stamp-On-The-Ground.jpg', import.meta.url).href },
            {name: "soundtrack19", 
            path: new URL('@/assets/media/music/soundTrack19.mp3', import.meta.url).href, 
            musicTitle: "ItaloBrothers_Welcome-To-The-Dancefloor.mp3", 
            img: new URL('@/assets/media/img/ItaloBrothers_Welcome-To-The-Dancefloor.jpg', import.meta.url).href },
            {name: "soundtrack20", 
            path: new URL('@/assets/media/music/soundTrack20.mp3', import.meta.url).href, 
            musicTitle: "KDA-POPSTARS_League of Legends.mp3", 
            img: new URL('@/assets/media/img/KDA-POPSTARS_League of Legends.jpg', import.meta.url).href },
            {name: "soundtrack21", 
            path: new URL('@/assets/media/music/soundTrack21.mp3', import.meta.url).href, 
            musicTitle: "Keen-v&Lorelei-B_la-vie-du-bon-cote.mp3", 
            img: new URL('@/assets/media/img/Keen-v&Lorelei-B_la-vie-du-bon-cote.jpg', import.meta.url).href },
            {name: "soundtrack22", 
            path: new URL('@/assets/media/music/soundTrack22.mp3', import.meta.url).href, 
            musicTitle: "Kungs_Never-Going-Home.mp3", 
            img: new URL('@/assets/media/img/Kungs_Never-Going-Home.jpg', import.meta.url).href },
            {name: "soundtrack23", 
            path: new URL('@/assets/media/music/soundTrack23.mp3', import.meta.url).href, 
            musicTitle: "Kygo&Ava-Max_Whatever.mp3", 
            img: new URL('@/assets/media/img/Kygo&Ava-Max_Whatever.jpg', import.meta.url).href },
            {name: "soundtrack24", 
            path: new URL('@/assets/media/music/soundTrack24.mp3', import.meta.url).href, 
            musicTitle: "Kylie-Cantrall&Alex-Boniello_Red.mp3", 
            img: new URL('@/assets/media/img/Kylie-Cantrall&Alex-Boniello_Red.png', import.meta.url).href },
            {name: "soundtrack25", 
            path: new URL('@/assets/media/music/soundTrack25.mp3', import.meta.url).href, 
            musicTitle: "La-Chenille-Synchro.mp3", 
            img: new URL('@/assets/media/img/La-Chenille-Synchro.jpg', import.meta.url).href },
            {name: "soundtrack26", 
            path: new URL('@/assets/media/music/soundTrack26.mp3', import.meta.url).href, 
            musicTitle: "Marwa-Loud_Bad-Boy.mp3", 
            img: new URL('@/assets/media/img/Marwa-Loud_Bad-Boy.jpg', import.meta.url).href },
            {name: "soundtrack27", 
            path: new URL('@/assets/media/music/soundTrack27.mp3', import.meta.url).href, 
            musicTitle: "Marwa-Loud_Fallait-pas.mp3", 
            img: new URL('@/assets/media/img/Marwa-Loud_Fallait-pas.jpg', import.meta.url).href },
            {name: "soundtrack28", 
            path: new URL('@/assets/media/music/soundTrack28.mp3', import.meta.url).href, 
            musicTitle: "Miley-Cyrus_Flowers.mp3", 
            img: new URL('@/assets/media/img/Miley-Cyrus_Flowers.jpg', import.meta.url).href },
            {name: "soundtrack29", 
            path: new URL('@/assets/media/music/soundTrack29.mp3', import.meta.url).href, 
            musicTitle: "Nathan-Evans_Wellerman.mp3", 
            img: new URL('@/assets/media/img/Nathan-Evans_Wellerman.jpg', import.meta.url).href },
            {name: "soundtrack30", 
            path: new URL('@/assets/media/music/soundTrack30.mp3', import.meta.url).href, 
            musicTitle: "Sia_Cheap-Thrills.mp3", 
            img: new URL('@/assets/media/img/Sia&Sean-Paul_Cheap-Thrills.jpg', import.meta.url).href },
            {name: "soundtrack31", 
            path: new URL('@/assets/media/music/soundTrack31.mp3', import.meta.url).href, 
            musicTitle:"Sia_Unstoppable.mp3", 
            img: new URL('@/assets/media/img/Sia_Unstoppable.jpg', import.meta.url).href },
            {name: "soundtrack32", 
            path: new URL('@/assets/media/music/soundTrack32.mp3', import.meta.url).href, 
            musicTitle:"The-Weeknd_Blinding-Lights.mp3", 
            img: new URL('@/assets/media/img/The-Weeknd_Blinding-Lights.jpg', import.meta.url).href },
            {name: "soundtrack33", 
            path: new URL('@/assets/media/music/soundTrack33.mp3', import.meta.url).href, 
            musicTitle:"W&W&ItaloBrothers&Captain-Curtis_Jump-Jump-Jump.mp3", 
            img: new URL('@/assets/media/img/W&W&ItaloBrothers&Captain-Curtis_Jump-Jump-Jump.jpg', import.meta.url).href },
            {name: "soundtrack34", 
            path: new URL('@/assets/media/music/soundTrack34.mp3', import.meta.url).href, 
            musicTitle:"What-s_My-Name.mp3", 
            img: new URL('@/assets/media/img/What-s_My-Name.jpg', import.meta.url).href }
        ]
    }

    init() {
        console.log("Timer Element: ", this.timerElement);
        console.log("Play Pause Button: ", this.playPauseButton);
        console.log("Alert Sound: ", this.alertSound);

        if (this.timerElement && this.playPauseButton && this.alertSound) {
            this.updateTimerDisplay();

            this.playPauseButton.addEventListener("click", () => {
                if (this.isRunning) {
                    this.pause();
                } else {
                    this.start();
                }
            });

            document.getElementById("nextButton").addEventListener("click", () => {
                this.nextSong();
            });

            this.restartButton.addEventListener("click", () => {
                this.restart();
            });
        } else {
            console.error("Les éléments HTML nécessaires ne sont pas trouvés.");
        }
    }

    getRandomMusic() {
        let randomIndex = Math.floor(Math.random() * this.musicList.length);
        return this.musicList[randomIndex];  // Retourne la musique sélectionnée
    }

    getNextMusic() {
        // Filtrer les chansons déjà jouées
        const unplayedSongs = this.musicList.filter(song => !this.playedSongs.includes(song));
        
        if (unplayedSongs.length === 0) {
            console.log("Toutes les chansons ont été jouées !");
            return null;  // Retourne null si toutes les chansons ont été jouées
        }
    
        let randomIndex = Math.floor(Math.random() * unplayedSongs.length);
        return unplayedSongs[randomIndex];
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
    
            // Choisit une musique uniquement si le timer n'a pas encore commencé
            if (!this.hasStarted) {
                this.selectedMusic = this.getNextMusic();  // Choisit une musique non jouée
                if (this.selectedMusic) {
                    this.soundTrack.src = this.selectedMusic.path;  // Met à jour la source de la musique
                    this.playedSongs.push(this.selectedMusic);  // Ajoute la musique aux chansons jouées
                }
                this.hasStarted = true;
            }
    
            this.soundTrack.play();
            this.intervalId = setInterval(() => this.countDown(), 1000);
            this.playPauseButton.value = "Pause";
    
            // Assure que le timer et la barre de progression soient visibles
            this.timerElement.style.display = 'block';
            this.progressBar.style.display = 'block';
        }
    }
    
    pause() {
        clearInterval(this.intervalId);
        this.isRunning = false;
        this.playPauseButton.value = "Play";

        if (this.soundTrack) {
            this.soundTrack.pause();
        }
    }

    restart() {
        this.pause();
        this.time = this.maxTime;
        this.updateTimerDisplay();
        this.resetStyles();
    
        if (this.soundTrack) {
            this.soundTrack.currentTime = 0;  // Remet la musique au début
        }
    
        // Réinitialiser l'indicateur
        this.hasStarted = false;
    
        // Réafficher le timer et la barre de progression
        this.timerElement.style.display = 'block';
        this.progressBar.style.display = 'block';
    
        // Masquer la réponse
        let responseElement = document.getElementById("response");
        if (responseElement) {
            responseElement.style.display = 'none';  // Masquer la réponse
        }
        
        // Masquer la div 'responseImg'
        let responseImgElement = document.getElementById("responseImg");
        if (responseImgElement) {
            responseImgElement.style.display = 'none';  // Masquer l'image avant de commencer la nouvelle chanson
        }
    }

    nextSong() {
        this.pause();  // Met en pause le timer et la musique actuelle
        
        // Masquer la div 'response'
        let responseElement = document.getElementById("response");
        if (responseElement) {
            responseElement.style.display = 'none';  // Masquer la réponse avant de commencer la nouvelle chanson
        }
    
        // Masquer la div 'responseImg'
        let responseImgElement = document.getElementById("responseImg");
        if (responseImgElement) {
            responseImgElement.style.display = 'none';  // Masquer l'image avant de commencer la nouvelle chanson
        }
    
        // Obtenir la nouvelle musique
        this.selectedMusic = this.getNextMusic();  
        if (this.selectedMusic) {
            this.soundTrack.src = this.selectedMusic.path;  // Met à jour la source de la musique
            this.soundTrack.play();  // Joue la nouvelle musique
            this.playedSongs.push(this.selectedMusic);  // Ajoute la musique aux chansons jouées
    
            // Réinitialiser le timer
            this.time = this.maxTime;
            this.updateTimerDisplay();
            this.updateProgressBar();
    
            // Réactiver la div du timer et la barre de progression
            this.timerElement.style.display = 'block';
            this.progressBar.style.display = 'block';
    
            // Redémarrer le timer
            this.start();  // Relance le timer
        } else {
            this.response();  // Afficher le message de fin
        }
    }
    
    

    updateTimerDisplay() {
        this.timerElement.innerText = this.time;
    }

    updateProgressBar() {
        let percentage = (this.time / this.maxTime) * 100;
        this.progressBar.style.width = percentage + "%";

        if (this.time < 3) {
            this.progressBar.style.backgroundColor = "red";
        } else if (this.time <= 5) {
            this.progressBar.style.backgroundColor = "orange";
        } else {
            this.progressBar.style.backgroundColor = "green";
        }
    }

    countDown() {
        this.timerElement.style.fontWeight = 'bold';
        if (this.time >= 0) {
            this.updateTimerDisplay();
            this.updateProgressBar();

            if (this.time <= 5) {
                this.timerElement.style.color = 'orange';
            }

            if (this.time < 3) {
                this.timerElement.style.color = 'red';
            }

            if (this.time === 1) {
                this.alertSound.play();
            }

            this.time--;
        } else {
            this.pause();
            this.resetStyles();
            this.response();  // Afficher la réponse lorsque le temps atteint 0
        }
    }

    resetStyles() {
        this.timerElement.style.color = '';
        this.updateProgressBar();
    }
    response() {
        // Masquer le compteur et la barre de progression
        this.timerElement.style.display = 'none';
        this.progressBar.style.display = 'none';
    
        // Afficher la réponse ou un message de fin
        let responseElement = document.getElementById("response");
    
        if (this.selectedMusic) {
            // Supprime les 4 derniers caractères du titre
            const cleanTitle = this.selectedMusic.musicTitle.slice(0, -4);
            responseElement.innerText = cleanTitle;
            console.log("La vraie réponse est : " + cleanTitle); // Affiche le titre nettoyé
        } else {
            responseElement.innerText = "Le Blind Test est terminé ! Toutes les musiques ont été jouées."; // Message de fin
        }
    
        responseElement.style.display = 'block'; // Afficher la réponse
    
        // Appeler la fonction pour afficher l'image
        this.responseImg();
    }
    

    responseImg() {
        let responseImgElement = document.getElementById("responseImg");
        responseImgElement.style.display = 'block'; // Affiche la div contenant l'image
    
        // Créer la balise image
        const imgElement = document.createElement('img');
        imgElement.src = this.selectedMusic.img; // L'URL de l'image
        imgElement.alt = "Image de " + this.selectedMusic.musicTitle; // Texte alternatif de l'image, utilisant un titre approprié
        imgElement.style.maxWidth = "100%"; // Taille maximale de l'image
        imgElement.style.marginTop = "1rem"; // Espacement entre le titre et l'image
    
        // Vider l'élément image avant d'ajouter une nouvelle image (pour éviter les doublons)
        responseImgElement.innerHTML = ''; // Vide la div avant d'ajouter la nouvelle image
    
        // Ajouter l'image à la div responseImg
        responseImgElement.appendChild(imgElement);
    
        // Optionnel : Ajouter un gestionnaire d'événement pour gérer le chargement ou l'erreur de l'image
        imgElement.onload = function() {
            console.log("Image chargée avec succès !");
        };
    
        imgElement.onerror = function() {
            console.log("Erreur lors du chargement de l'image.");
            // Tu peux ajouter un message d'erreur ou une image de remplacement si l'image échoue à se charger
            responseImgElement.innerHTML = "L'image n'a pas pu être chargée.";
        };
    }
    
}

window.onload = function() {
    let time = 20;

    let countdown = new BlindTest(
        time,  
        "timer",  
        "progressBar",  
        "playPauseButton",  
        "restart",  
        "alertSound",  
        "soundTrack",  
        "response"  
    );
};