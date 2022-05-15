<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">Inicio</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/Portada" class="nav-link">Informacion</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/About" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
