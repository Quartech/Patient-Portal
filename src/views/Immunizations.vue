<template>
  <div class="container">
    <h1>Immunizations</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Immunization ID</th>
          <th>Immunization Name</th>
          <th>
            <button class="btn btn-light" @click="SortImmunizations()">
              <font-awesome-icon icon="arrows-alt-v"/>
            </button>
            Date Administered (YYYY-MM-DD)</th>
          <th>
            <button class="btn btn-primary" @click="GetAllImmunizations()">
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
          <td>
            <button class="btn btn-light btn-sm">DETAILS</button>
          </td>
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
      Immunizations: [],
      Sort: "new-to-old"
    }
  },
  methods: {
    GetAllImmunizations() {
      this.$http.get('http://hapi.fhir.org/baseDstu3/Immunization?patient=1036047').then(response => {
        this.Immunizations = response.body.entry;
        console.log(this.Immunizations);
      }, response => {
        console.error(response);
      })
    },
    SortImmunizations() {
      let val1, val2;
      if(this.Sort === "new-to-old") {
        val1 = -1;
        val2 = 1;
        this.Sort = "old-to-new"
      } else {
        val1 = 1;
        val2 = -1;
        this.Sort = "new-to-old"
      }
      this.Immunizations = this.Immunizations.sort((a, b) => {
        if (a.resource.date < b.resource.date) {
          return val1;
        }
        if (a.resource.date > b.resource.date) {
          return val2;
        }
        return 0;
      });
    }
  },
  beforeMount() {
    this.GetAllImmunizations();
    this.SortImmunizations();
  }
};
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>