<template>
    <div class="page-body">      
        <b-img fluid :src="this.imageSource"/>
        <h1 class="centered-message">Health Gateway</h1>
        <br>
        <div class="page-content">
            <b-row>
                <b-col>
                    <b-card class="card-left">
                        <h4>Sign up with your BC services card.</h4>
                        <button class="btn btn-primary" @click="redirect('')">Log In</button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="card-right">
                        <h4>Log in to view your records.</h4>
                        <button class="btn btn-secondary">Sign Up</button>
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
        imageSource: require("../assets/coverbanner.jpeg")
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
.card-left {
    margin-top: 30px;
    margin-left: 40%;
}
.card-right {
    margin-top: 30px;
    margin-right: 40%
}
.btn{
    display: inline-block;
    margin: 10px;
}
.b-card {
    text-align: center;
}
.centered-message {
    position: absolute;
    top: 45%;
    left: 5%;
    color: white;
}
</style>