<template>
<h4>MissionCommander</h4>
  <div v-if="currentMissionCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">MainStack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMissionCommander.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
      Eliminar M.C.
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un MissionCommander. </p>
  </div>
</template>
<script>
import missionCommander from "../services/missionCommander";
export default {
  name: "missioncommander",
  data() {
    return {
      currentMissionCommander: null,
      message: ''
    };
  },
  methods: {
    getMissionCommander(id) {
      missionCommander.get(id)
        .then(response => {
          this.currentMissionCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      missionCommander.delete(this.currentMissionCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "missioncomanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() {
      missionCommander.update(this.currentMissionCommander.id, this.currentMissionCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
