<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> MissionCommander Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(explorer, index) in explorers"
          :key="index"
          @click="setActiveExplorer(explorer, index)"
        >
          {{ explorer.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>MissionCommander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Username:</strong></label> {{ currentExplorer.username}}
          <br><label><strong>MainStack:</strong></label> {{ currentExplorer.mainStack}}
        </div>
        <router-link :to="'/explorer/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un missionCommander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import ExplorerService from "../services/missionCommander";

export default {
  name: "explorer-list",
  data() {
    return {
      tutorials: [],
      explorers: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllExplorers(){
      ExplorerService.getAll()
        .then(response => {
          this.explorers = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(explorer, index) {
      this.currentExplorer= explorer;
      this.currentIndex = explorer? index : -1;
    }
  },
  mounted() {
    this.getAllExplorers();
  }
};
</script>