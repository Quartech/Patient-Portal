<template>
  <div class="medications">
    <h1>Medications</h1>
    <table class="table">
      <thead>
        <tr>
          <!-- <th>Medication ID</th> -->
          <th>Medication Name</th>
          <th>Dosage</th>
          <th>
            <button class="btn btn-primary" v-on:click="GetAllMedications()">
              <font-awesome-icon icon="sync-alt"/>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medication in Medications" :key=medication.resource.id>
          <!-- <td>{{ medication.resource.id }}</td> -->
          <td>{{ medication.resource.medicationCodeableConcept.text ?  medication.resource.medicationCodeableConcept.text.toUpperCase() : 'No Name Provided'}}</td>
          <td>{{ medication.resource.dosage ? medication.resource.dosage[0].text : 'N/A'}}</td>
          <td>
            <button class="btn btn-secondary btn-sm" @click="OpenMedicationModal(medication.resource)">
              DETAILS
            </button>
          </td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>
// @ is an alias to /src
import MedicationModal from '@/components/MedicationModal.vue';
export default {
  name: 'Medications',
  componennts: {
    'medication-modal': MedicationModal
  },
  data: () => {
    return {
      Medications: [],
    }
  },
  methods: {
    GetAllMedications() {
      this.$http.get('http://hapi.fhir.org/baseDstu3/MedicationStatement?_count=25&_format=json').then(response => {
        this.Medications = response.body.entry;
        console.log(this.Medications)
      }, response => {
        console.error(response);
      });
    },
    GetAllMedicationsForPatient(PatientId) {

    },
    OpenMedicationModal(MedicationStatement) {
      console.log(MedicationStatement);
    }
  },
  beforeMount() {
    this.GetAllMedications()
  }
};
</script>
