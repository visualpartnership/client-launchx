<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> MissionCommander Inscritos </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missioncommander, index) in missioncommanders"
          :key="index"
          @click="setActiveMissionCommander(missioncommander, index)"
        >
          {{ missioncommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>MissionCommander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>MainStack:</strong></label> {{ currentMissionCommander.mainStack}}
        </div>
        <router-link :to="'/missioncommander/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un missionCommander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import missionCommander from "../services/missionCommander";

export default {
  name: "missionCommander-list",
  data() {
    return {
      tutorials: [],
      missioncommanders: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      missionCommander.getAll()
        .then(response => {
          this.missioncommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(missioncommander, index) {
      this.currentMissionCommander= missioncommander;
      this.currentIndex = missioncommander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>