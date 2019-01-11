<template>
  <div class="container">
    <h1>Lab Results</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Test</th>
          <th>Results</th>
          <th>
            <button class="btn btn-light" @click="SortLabResults()">
              <font-awesome-icon icon="arrows-alt-v"/>
            </button>
            Date of Inspection
          </th>
          <th>
            <button class="btn btn-primary" @click="getAllLabResultsForPatient(1036047)">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="labResult in LabResults" :key=labResult.resource.id>
          <td>{{ labResult.resource.code.coding[0].display }}</td>
          <td>{{ labResult.resource.result.length }}</td>
          <td>{{ labResult.resource.effectiveDateTime.split('T')[0] }}</td>
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
  name: 'LabResults',
  data: () => {
    return {
      LabResults: [],
      Sort: "new-to-old"
    }
  },
  components: {
  },
  methods: {
    getAllLabResultsForPatient(patientId) {
      this.$http.get('http://hapi.fhir.org/baseDstu3/DiagnosticReport?patient=' + patientId).then(response => {
        this.LabResults = response.body.entry;
        this.SortLabResults()
      });
    },
    SortLabResults() {
      let val1, val2;
      if(this.Sort === "new-to-old") {
        val1 = 1;
        val2 = -1;
        this.Sort = "old-to-new"
      } else {
        val1 = -1;
        val2 = 1;
        this.Sort = "new-to-old"
      }
      this.LabResults = this.LabResults.sort((a, b) => {
        if (a.resource.effectiveDateTime < b.resource.effectiveDateTime) {
          return val1;
        }
        if (a.resource.effectiveDateTime > b.resource.effectiveDateTime) {
          return val2;
        }
        return 0;
      });
    }
  },
  
  beforeMount() {
    this.getAllLabResultsForPatient(1036047)
  }
};
</script>

<style scoped>
  .container {
    text-align: center;
  }
</style>