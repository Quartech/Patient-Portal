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
        <tr v-for="immunization in immunizations" :key="immunization.lotNumber">
          <td>{{ immunization.lotNumber }}</td>
          <td>{{ immunization.vaccineCode.text }}</td>
          <td>{{ immunization.occurrenceDateTime }}</td>
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
        .get("https://localhost:44328/api/immunization")
        .then(
          response => {
            console.log("RESPONSE:", response)
            this.immunizations = response.body.immunizations;
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
        if (a.occurrenceDateTime < b.occurrenceDateTime) {
          return val1;
        }
        if (a.occurrenceDateTime > b.occurrenceDateTime) {
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