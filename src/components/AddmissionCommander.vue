<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo MissionCommander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missioncommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="missioncommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">MainStack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="missioncommander.mainStack"
          name="mainStack"
        />
      </div>
      <button @click="saveMissionCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Missioncommander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Add</button>
    </div>
  </div>
</template>

<script>
import missionCommander from "../services/missionCommander";
export default {
  name: "add-missioncommander",
  data() {
    return {
      missioncommander: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.missioncommander.name,
        username: this.missioncommander.username,
        mainStack: this.missioncommander.mainStack
      };
      missionCommander.create(data)
        .then(response => {
          this.missioncommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.missioncommander = {};
    }
  }
};
</script>
