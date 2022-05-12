<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
          @click="setActiveMissionCommander(missionCommander, index)"
        >
          {{ missionCommander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommander.username}}
          <br><label><strong>Mission:</strong></label> {{ currentMissionCommander.mission}}
        </div>
        <router-link :to="'/MissionCommander/' + currentMissionCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission Commander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import ExplorerService from "../services/ExplorerService";

export default {
  name: "missionCommander-list",
  data() {
    return {
      tutorials: [],
      missionCommanders: [],
      currentTutorial: null,
      currentMissionCommander: null,
      currentIndex: -1,
      title: "",
      missionCommanderId: ""
    };
  },
  methods: {
    getAllMCommander(){
      ExplorerService.getAllMCommanders()
        .then(response => {
          this.missionCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommander(missionCommander, index) {
      this.currentMissionCommander= missionCommander;
      this.currentIndex = missionCommander? index : -1;
    }
  },
  mounted() {
    this.getAllMCommander();
  }
};
</script>