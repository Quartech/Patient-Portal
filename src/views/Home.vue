<template>
  <div class="container">
    <b-jumbotron>
      <template slot="header">
        Bootstrap Vue
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content
        out within the larger container.
      </p>
      <b-btn variant="primary" href="#">Do Something</b-btn>
      <b-btn variant="success" href="#">Do Something Else</b-btn>
    </b-jumbotron>
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
