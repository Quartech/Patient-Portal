<template>
  <div class="container">
    <br>
    <b-jumbotron text-variant="white" fluid="true">
      <template slot="header">Health Gateway</template>
      <template slot="lead">
        Safely and securely view your current medications, immunizations and lab results. 
      </template>
    </b-jumbotron>
    <div class="page-body">
      <b-row>
        <b-col>
          <b-card class="clickable-card" bg-variant="info" text-variant="white" @click="redirect('medications')"> 
            <h4 class="card-top">
              <font-awesome-icon icon="prescription-bottle-alt"></font-awesome-icon> Medications
            </h4>
            <p class="card-text">
              View your current medication perscriptions.
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="clickable-card" bg-variant="primary" text-variant="white" @click="redirect('immunizations')">
            <h4 class="card-top">
              <font-awesome-icon icon="syringe"></font-awesome-icon> Immunizations
            </h4>
            <p class="card-text">
              View all your past Immunizations.
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="clickable-card" bg-variant="secondary" text-variant="white" @click="redirect('lab-results')">
            <h4 class="card-top">
              <font-awesome-icon icon="flask"></font-awesome-icon> Lab Results
            </h4>
            <p class="card-text">
              View your lab results and observations.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data: () => {
    return {
    };
  },
  methods: {
    redirect(path) {
      this.$router.push('/' + path);
    }
  }
};
</script>
<style scoped>
  .clickable-card:hover {
    cursor: pointer;
  }
  .jumbotron {
    background-image: url("../assets/cover.jpeg");
    background-size: cover;
  }
</style>

