<template>
    <div class="page-body">      
        <b-img fluid :src="this.imageSource"/>
        <h1 class="centered-message">Health Gateway</h1>
        <br>
        <div class="page-content">
            <b-row> 
                <b-col>
                    <b-card class="card-left">
                        <h4>Sign up using your BC Services Card.</h4>
                        <b-button size="lg" class="btn-grey"  @click="redirect('')">Sign Up</b-button>
                    </b-card>
                </b-col>
                <b-col>
                    <b-card class="card-right">
                        <h4>Log in using your BC Services Card.</h4>
                        <!-- <b-button size="lg" class="btn-blue" @click="redirect('')">Login</b-button> -->
                        <b-button size="lg" class="btn-blue" @click="sendLogin()">Login</b-button>
                    </b-card>
                </b-col>
            </b-row>
            <span align="center">
            <b-row>
                <b-col>
                <br/>
                <h3>Welcome to Your Health Gateway</h3>
                <p>Here you can access your health data and services and manage access</p>
                <b-button size="lg" class="btn-grey">Learn more</b-button></b-col>
                <br/>
            <b-row>
            </span>
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
        imageSource: require("../assets/coverbanner.jpeg"),
        domain: '',
        ajaxRequest:false,
        postResults:[]
    };
  },
  methods: {
    redirect(path) {
      this.$router.push('/' + path);
    },
    sendLogin: function() {
        // this.$http
        // .get("http://localhost:3001/data")
        // .then(
        //   response => {
        //     console.log("RESPONSE:", response)
        //     this.immunizations = response.body.immunizations;
        //     this.sortImmunizations();
        //     this.patient = "Alice"
        //   },
        //   response => {
        //     console.error(response);
        //   }
        // );

        this.ajaxRequest = true;
        this.$http.post('http://localhost:3001/data', {
              msg: 'test'
            }, function (data, status, request) {
                this.postResults = data;

                this.ajaxRequest = false;
            });
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
.btn-blue {
    display: inline-block;
    margin: 10px;
    background-color: blue;
}
.btn-grey {
    display: inline-block;
    margin: 10px;
    background-color: grey;
}
.b-card {
    text-align: center;
}
.centered-message {
    position: absolute;
    top:25%;
    left: 5%;
    color: white;
    font-size: 10em ;
}
 .jumbotron {
    background-image: url("../assets/cover.jpeg");
    background-size: cover;
    background-clip: content-box;
  }
</style>