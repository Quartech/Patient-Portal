<template>
  <div class="container">
    <b-jumbotron>
      <template slot="header">Quartech Patient Portal</template>
      <template slot="lead">
        This application lets you view your current medications, immunizations and lab results. 
      </template>
    </b-jumbotron>
    <div class="page-body">
      <b-row>
        <b-col>
          <b-card title="Medications">
            <p class="card-text">
              View your current medication perscriptions.
            </p>
            <button class="btn btn-primary" @click="redirect('medications')">MEDICATIONS</button>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Immunizations">
            <p class="card-text">
              View all your past Immunizations.
            </p>
            <button class="btn btn-primary" @click="redirect('immunizations')">IMMUNIZATIONS</button>
          </b-card>
        </b-col>
        <b-col>
          <b-card title="Lab Results">
            <p class="card-text">
              View your lab results and observations.
            </p>
            <button class="btn btn-primary" @click="redirect('lab-results')">LAB RESULTS</button>
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
    return {};
  },
  methods: {
    redirect(path) {
      this.$router.push('/' + path);
    }
  }
};
</script>
