<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/playlist">PlayList</RouterLink>
      </nav>
    </header>
    <main class="">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #43bb83;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #334b5c ;
}

nav a:first-of-type {
  border: 0;
}

</style>
