<template>
  <div class="profile">
    <h1>Profile</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Profile',
  data: () => {
    return {
      CurrentPatient: {}
    }
  },
  methods: {
    GetCurrentUserInfo() {
      this.$http.get('http://hapi.fhir.org/baseDstu3/Patient/422566?_format=json').then(repsonse => {
        // console.log(repsonse.body);
        this.CurrentPatient = response.body;
      });
    }
  },
  beforeMount() {
    this.GetCurrentUserInfo()
  }
};
</script>
