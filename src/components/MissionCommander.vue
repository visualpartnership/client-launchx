<template>
<h4>Mission Commander</h4>
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
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mission Commander. </p>
  </div>
</template>
<script>
import ExplorerService from "../services/ExplorerService";
export default {
  name: "missionCommander",
  data() {
    return {
      currentMissionCommander: null,
      message: ''
    };
  },
  methods: {
    getMComander(id) {
      ExplorerService.getMComanders(id)
        .then(response => {
          this.currentMissionCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      ExplorerService.deleteMC(this.currentMissionCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "explorers" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() {
      ExplorerService.updateMC(this.currentMissionCommander.id, this.currentMissionCommander)
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
    this.getMComander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
