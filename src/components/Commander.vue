<template>
<h4>Commander</h4>
  <div v-if="currentCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentCommander.mainStack"
        />
      </div>
      <div class="form-group onerIn">
        <label for="title">Current Enrollment</label>
        <input type="checkbox" disabled class="form-control checkIn" id="title"
          v-model="currentCommander.currentEnrollment"
        />
      </div>
      <div class="form-group onerIn">
        <label for="title">Azure Certification</label>
        <input type="checkbox" disabled class="form-control checkIn" id="title"
          v-model="currentCommander.hasAzureCertification"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCommander">
      Eliminar Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un explorer. </p>
  </div>
</template>
<script>
import CommanderService from "../services/CommanderService";
export default {
  name: "commander",
  data() {
    return {
      currentCommander: null,
      message: ''
    };
  },
  methods: {
    getCommander(id) {
      CommanderService.get(id)
        .then(response => {
          this.currentCommander = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCommander() {
      CommanderService.delete(this.currentCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "commanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateCommander() {
      CommanderService.update(this.currentCommander.id, this.currentCommander)
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
    this.getCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.checkIn{
  background-color: aqua;
  width: 20px;
  height: 20px;
}
.onerIn{
  display: flex;
  justify-content: space-around;
}
</style>
