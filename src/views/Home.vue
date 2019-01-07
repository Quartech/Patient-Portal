<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data: () => {
    return({});
  },
  methods: {
    GetAllMedicationRecords: () => {
      console.log("Button Pressed");
      return ["Med Record 1", "Med Record 2"]
    },

    GetAllMedicationRecordsForPatient: (PatientId) => {
      console.log(PatientId);
    },
  },
};

</script>
