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
        <h4>1234 Vancouver Street</h4>
        <h4>PHN: 9*****6204</h4> 
        <h4>DOB: 1981 FEB 19</h4>
      </b-col>
    </b-row>
    <p>If this profile information is incorrect, go <a href="#">here</a></p>
    <h1>Connections</h1>
    <p>Enjoy all the benefits and value that third-party health apps provide by
      connecting them to your health data</p>
    <h4>You have two connected apps</h4>
    <p>&nbsp;</p>
    <b-row>
      <b-col cols="5">
        <img src="https://images.ctfassets.net/1izjqx4qtt8c/1NogrRoCWomi6Ksecqm6KS/0a863bb2d152c76713626ec4fc1ee9d9/THB_logo_hor_pur_RGB.png" height="30"/>
       <h6>Connect with Babylon to share all your health data</h6>
       <h5>[Disconnect Babylon]</h5>
       </b-col>
    </b-row>
    <b-row>
      <b-col cols="5">
        <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/built_in/ios9-health-app-icon.png" height="30"/>
       <h6>Connect with Apple Health to share all your health data to view progress</h6>
       <h5>[Disconnect Apple Health]</h5>
       </b-col>
    </b-row>
    <h1>Delegation</h1>
    <p>Allow others to view your health data by granting.</p>
    <h4>You have not delegated access to anyone</h4>
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
        .then(response => {
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
