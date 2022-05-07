<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Commander</h3>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="commanders.name"
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
          v-model="commanders.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="commanders.mainStack"
          name="mainStack"
        />
      </div>
      <div class="form-group checkAny">
          <div>
              <label for="title">Current Enrollment</label>
                <input
                  type="checkbox"
                  class="check0"
                  id="currentEnrollment"
                  required
                  v-model="commanders.currentEnrollment"
                  name="currentEnrollment"
                />
          </div>
          <div>
              <label for="title">Azure Certification</label>
                <input
                  type="checkbox"
                  class="check0"
                  id="hasAzureCertification"
                  required
                  v-model="commanders.hasAzureCertification"
                  name="hazAzureCertification"
                />
          </div>
      </div>
      <div class="form-group">
        
      </div>
      <button @click="saveCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newCommander">Add</button>
    </div>
  </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
export default {
  name: "add-commander",
  data() {
    return {
      commanders: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
        currentEnrollment: false,
        hasAzureCertification: false
      },
      submitted: false
    };
  },
  methods: {
    saveCommander() {
      var data = {
        name: this.commanders.name,
        username: this.commanders.username,
        mainStack: this.commanders.mainStack,
        currentEnrollment: this.commanders.currentEnrollment,
        hasAzureCertification: this.commanders.hasAzureCertification
      };
      CommanderService.create(data)
        .then(response => {
          this.commanders.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCommander() {
      this.submitted = false;
      this.commanders = {};
    }
  }
};
</script>
<style>
.check0{
    width: 60px;
    height: 20px;
}
.checkAny{
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    width: 40%;
}
</style>
