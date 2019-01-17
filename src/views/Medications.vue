<template>
  <div class="container">
    <h1>Medications</h1>
    <table class="table" v-if="hasMedications">
      <thead>
        <tr>
          <!-- <th>Medication ID</th> -->
          <th>Medication Name</th>
          <th>Dosage</th>
          <th>Perscription Date</th>
          <th>Expiry Date</th>
          <th># of Renewals Left</th>
          <th>
            <button class="btn btn-primary" v-on:click="getAllMedications()">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medication in medications" :key="medication.resource.id">
          <!-- <td>{{ medication.resource.id }}</td> -->
          <td>{{ medication.resource.medicationCodeableConcept ? medication.resource.medicationCodeableConcept.coding[0].display.toUpperCase() : 'No Name Provided'}}</td>
          <td>{{ medication.resource.dosage ? medication.resource.dosage[0].text : 'N/A'}}</td>
          <td>2019-01-02</td>
          <td>2019-02-02</td>
          <td>3</td>
          <td>
            <b-btn @click="openModal(medication)" class="btn btn-light btn-sm">DETAILS</b-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <h1>Looks like you don't have any medications perscribed. Would you like to request one?</h1>
    </div>
    <div>
      <medicaiton-modal></medicaiton-modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MedicationModal from "@/components/MedicationModal.vue";
export default {
  name: "Medications",
  data: () => {
    return {
      hasMedications: true,
      medications: []
    };
  },
  components: {
    "medicaiton-modal": MedicationModal
  },
  methods: {
    getAllMedications() {
      this.$http
        .get(
          "http://hapi.fhir.org/baseDstu3/MedicationStatement?_count=10&_format=json"
        )
        .then(
          response => {
            this.medications = response.body.entry;
            if (this.medications.length > 0) {
              this.hasMedications = true;
            }
          },
          response => {
            console.error(response);
          }
        );
    },
    openModal(medicationRow) {
      console.log(medicationRow)
    }
  },

  beforeMount() {
    this.getAllMedications();
  }
};
</script>

<style scoped>
.container {
  text-align: left;
}
</style>