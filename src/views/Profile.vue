<template>
  <div class="container">
    <h1>Profile</h1>
    <br>
    <b-row>
      <b-col>
        <img src="./../assets/profile.jpg" width="200" height="200"/>
      </b-col>
      <b-col cols="9">
        <h2>Alice Jacobs</h2>
        <h4>Address: 1234 Vancouver Street</h4>
        <h4>Born: 1981-02-19</h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Profile",
  data: () => {
    return {
      currentPatient: {},
      images: {
        profile: require('./../assets/profile.jpg')
      }
    };
  },
  methods: {
    getCurrentUserInfo() {
      this.$http
        .get("http://hapi.fhir.org/baseDstu3/Patient/422566?_format=json")
        .then(repsonse => {
          this.currentPatient = response.body;
        });
    }
  },
  beforeMount() {
    this.getCurrentUserInfo();
  }
};
</script>
<style scoped>
.container {
  text-align: left;
}
</style>
