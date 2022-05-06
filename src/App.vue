<template>
  <div id="app">
    <nav class="navbar navbar-expand bg-white banner0">
      <router-link to="/" class="navbar-brand onTitle">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
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
<style>
.banner0{

  background: linear-gradient(80deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 35%, rgb(0, 42, 90) 100%);
}
.onTitle{
  color: white;
}
</style>
