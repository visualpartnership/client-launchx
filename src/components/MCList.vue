<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(mc, index) in mcs"
          :key="index"
          @click="setActiveMC(mc, index)"
        >
          {{ mc.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMC">
        <h4>Details</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMC.name}}
          <br><label><strong>Username:</strong></label> {{ currentMC.username}}
          <hr>
          <br><label><strong>Mission Stack:</strong></label> {{ currentMC.mainStack}}
          <br><label><strong>Current Enrollment:</strong></label> {{ currentMC.currentEnrollment}}
          <br><label><strong>Azure Certification:</strong></label> {{ currentMC.hasAzureCertification}}
        </div>
        <router-link :to="'/mc/' + currentMC.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un explorer.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MCService from "../services/MCService";

export default {
  name: "mc-all",
  data() {
    return {
      tutorials: [],
      mcs: [],
      currentTutorial: null,
      currentMC: null,
      currentIndex: -1,
      title: "",
      mcId: ""
    };
  },
  methods: {
    getAllMCs(){
      MCService.getAll()
        .then(response => {
          this.mcs = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMC(mc, index) {
      this.currentMC= mc;
      this.currentIndex = mc? index : -1;
    }
  },
  mounted() {
    this.getAllMCs();
  }
};
</script>
