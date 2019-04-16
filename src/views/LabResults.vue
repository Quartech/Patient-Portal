<template>
  <div class="container">
    <h1><font-awesome-icon icon="flask"></font-awesome-icon> Lab Results</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Test</th>
          <th>Results</th>
          <th>
            <button class="btn btn-light" @click="sortLabResults()">
              <font-awesome-icon icon="arrows-alt-v"/>
            </button>
            Date of Inspection
          </th>
          <th>
            <button class="btn btn-primary" @click="getAllLabResults()">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="labResult in labResults" :key="labResult.id">
          <td>{{ labResult.code.text}}</td>
          <td>{{ !labResult.result ? 0 : labResult.result.length }}</td>
          <td>{{ labResult.effectiveDateTime.split('T')[0] }}</td>
          <td>
            <button
              class="btn btn-light btn-sm"
              @click="openLabResultModal(labResult.resource)"
            >DETAILS</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LabResults",
  data: () => {
    return {
      labResults: [],
      sort: "new-to-old"
    };
  },
  components: {},
  methods: {
    getAllLabResults() {
      this.$http
        .get("http://localhost:5010/api/diagnosticreport")
        .then(response => {
          console.log(response);
          this.labResults = response.body.labresults;
          this.sortLabResults();
        });
    },
    sortLabResults() {
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
      this.labResults = this.labResults.sort((a, b) => {
        if (a.effectiveDateTime < b.effectiveDateTime) {
          return val1;
        }
        if (a.effectiveDateTime > b.effectiveDateTime) {
          return val2;
        }
        return 0;
      });
    },
    openLabResultModal(labResult) {
      console.log(labResult);
    }
  },

  beforeMount() {
    this.getAllLabResults();
  }
};
</script>

<style scoped>
.container {
  text-align: left;
}
</style>