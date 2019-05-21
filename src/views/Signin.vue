<template>
    <div class = "container">
        <p>Hello World! 1</p>

        <b-form v-on:submit.prevent="submit()">
            <b-form-group id="signin" label="Sign In">
                

                <b-form-input 
                    id="signin-email"
                    v-model="email"
                    placeholder="Email"
                    type="email"
                    required
                ></b-form-input>

                <b-form-input 
                    id="signin-password"
                    v-model="password"
                    placeholder="Password"
                    required
                    type="password"
                ></b-form-input>

                

            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

        
    </div>
</template>
<script>
import VueCookies from 'vue-cookies'
import axios from 'axios'
import Vue from 'vue'
Vue.use(VueCookies)
export default {
    
    data:{
        csrfmiddlewaretoken:'00000000000000000000000000000000',
        email:'wade%40mail.com',
        password1:'05470a5bfe',
    },
    created: function(){
        
    },
    methods: {
        submit(){
            var vm = this;
            var dataStr = 'csrfmiddlewaretoken=00000000000000000000000000000000&first_name='+'&email='+vm.email+'&password='+vm.password
            axios.post('http://localhost:8000/indy/', dataStr)
                .then(function (response) {
                    //currentObj.output = response.data;
                })
                .catch(function (error) {
                    //currentObj.output = error;
                });
        },
        redirect(path) {
            this.$router.push('/' + path);
        }
    }
}
</script>

