<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
        </li>
        <li class="nav-item">
          <b class="nav-link">||</b>
        </li>
        <li class="nav-item">
          <router-link to="/missioncommander" class="nav-link">MissionCommander</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addm" class="nav-link">Agregar MissionCommander</router-link>
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
