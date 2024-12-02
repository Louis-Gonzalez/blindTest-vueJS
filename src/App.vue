<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/playlist">PlayList</RouterLink>
        <RouterLink to="/playlist1">PlayList1</RouterLink>
      </nav>
    </header>
    <main class="">
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
  /* Navbar fixée en haut de la page */
  nav {
    width: 100%;
    font-size: 20px;
    text-align: center;
    position: fixed;  /* Fixe la navbar en haut de la page */
    top: 0;
    left: 0;
    right: 0;
    background-color: black;  /* Assure une visibilité claire de la navbar */
    z-index: 1000; /* Assure que la navbar reste au-dessus des autres éléments */
    margin-top: 0;  /* Annule le margin-top pour la navbar fixée */
  }

  /* Style des liens actifs dans la navbar */
  nav a.router-link-exact-active {
    color: #43bb83;
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  /* Style des liens dans la navbar */
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #334b5c;
    text-decoration: none;
  }

  /* Retire la bordure gauche du premier lien */
  nav a:first-of-type {
    border: 0;
  }

  /* Assurer que le contenu sous la navbar ne soit pas caché */
  .main-content {
    margin-top: 4rem; /* Décale le contenu sous la navbar pour qu'il ne soit pas caché */
    padding: 1rem;
  }

  /* Assurer qu'il n'y a pas de débordement de la page */
  body {
    overflow-x: hidden; /* Empêche tout débordement horizontal */
  }
</style>

