<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="mc.name"
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
          v-model="mc.username"
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
          v-model="mc.mainStack"
          name="mainStack"
        />
      </div>
      <div class="form-group">
        <label for="currentEnrollment">Current Enrollment</label>&nbsp;
        <select class="form-control" id="currentEnrollment" v-model="mc.currentEnrollment">
        <option disabled value="">Choose...</option>
        <option value="1">Si</option>
        <option value="0">No</option>
      </select>
      </div>
      <div class="form-group">
        <label for="hasAzureCertification">Tiene Certificacion Azure</label>&nbsp;
        <select  class="form-control" id="hasAzureCertification" v-model="mc.hasAzureCertification">
        <option disabled value="">Choose...</option>
        <option value="1">Si</option>
        <option value="0">No</option>
      </select>
      </div>

      <button @click="saveMC" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> MC creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMC">Add</button>
    </div>
    <div id="errorMessage"> 

    </div>
  </div>
</template>

<script>
import MCService from "../services/MCService";
export default {
  name: "add-mc",
  data() {
    return {
      mc: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
        currentEnrollment: "",
        hasAzureCertification: "",
      },
      submitted: false
    };
  },
  methods: {
    saveMC() {
      var data = {
        name: this.mc.name,
        username: this.mc.username,
        mainStack: this.mc.mainStack,
        currentEnrollment: this.mc.currentEnrollment == "1" ? true: false,
        hasAzureCertification: this.mc.hasAzureCertification == "1"? true : false,
      };
      console.log(data);
      if(data.name == '' || data.username == '' || data.mainStack == '' || data.currentEnrollment === '' || data.hazAzureCertification === ''){
        let errorMEssage = document.querySelector('#errorMessage');
        errorMEssage.innerHTML = '<div class="alert alert-danger" role="alert">Completa todos los campos</div>';
        
      }else{
        MCService.create(data)
          .then(response => {
            this.mc.id = response.data.id;
            this.submitted = true;
            let errorMEssage = document.querySelector('#errorMessage');
            errorMEssage.innerHTML = '';

          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    newMC() {
      this.submitted = false;
      this.mc = {};
    }
  }
};
</script>
