<template>
  <div class="immunizations">
    <h1>Immunizations</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Immunization ID</th>
          <th>Immunization Name</th>
          <th>Date Administered (YYYY-MM-DD)</th>
          <th>
            <button class="btn btn-primary" v-on:click="GetAllImmunizations()">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="immunization in Immunizations" :key=immunization.resource.id>
          <td>{{ immunization.resource.id }}</td>
          <td>{{ immunization.resource.vaccineCode.text }}</td>
          <td>{{ immunization.resource.date.split('T')[0] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Immunizations',
  data: () => {
    return {
      Immunizations: []
    }
  },
  methods: {
    GetAllImmunizations() {
      this.$http.get('http://hapi.fhir.org/baseDstu3/Immunization?_count=50').then(response => {
        this.Immunizations = response.body.entry;
        // console.log(this.Immunizations);
      }, response => {
        console.error(response);
      })
    },

    GetAllImmunizationsForPatient(PatientId) {

    }
  },
  beforeMount() {
    this.GetAllImmunizations();
  }
};
</script>