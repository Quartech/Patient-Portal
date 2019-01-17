<template>
  <div class="container">
    <h1>Immunizations</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Immunization ID</th>
          <th>Immunization Name</th>
          <th>
            <button class="btn btn-light" @click="sortImmunizations()">
              <font-awesome-icon icon="arrows-alt-v"/>
            </button>
            Date Administered (YYYY-MM-DD)
          </th>
          <th>
            <button class="btn btn-primary" @click="getAllImmunizations()">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="immunization in immunizations" :key="immunization.resource.id">
          <td>{{ immunization.resource.id }}</td>
          <td>{{ immunization.resource.vaccineCode.text }}</td>
          <td>{{ immunization.resource.date.split('T')[0] }}</td>
          <td>
            <button class="btn btn-light btn-sm" @click="openImmunizationModal(immunization.resource)">DETAILS</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Immunizations",
  data: () => {
    return {
      immunizations: [],
      sort: "new-to-old"
    };
  },
  methods: {
    getAllImmunizations() {
      this.$http
        .get("http://hapi.fhir.org/baseDstu3/Immunization?patient=1036047")
        .then(
          response => {
            this.immunizations = response.body.entry;
            this.sortImmunizations();
          },
          response => {
            console.error(response);
          }
        );
    },
    sortImmunizations() {
      let val1, val2;
      if (this.sort === "new-to-old") {
        val1 = 1;
        val2 = -1;
        this.sort = "old-to-new";
      } else {
        val1 = -1;
        val2 = 1;
        this.sort = "new-to-old";
      }
      this.immunizations = this.immunizations.sort((a, b) => {
        if (a.resource.date < b.resource.date) {
          return val1;
        }
        if (a.resource.date > b.resource.date) {
          return val2;
        }
        return 0;
      });
    },
    openImmunizationModal(immunizationRow) {
      console.log(immunizationRow);
    }
  },
  beforeMount() {
    this.getAllImmunizations();
  }
};
</script>

<style scoped>
.container {
  text-align: left;
}
</style>