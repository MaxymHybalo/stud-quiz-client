<template id="login">
    <form method="post">
        <label for="">Login</label>
        <input type="text" v-model='login'/>
        <label for="">Password</label>
        <input type="password" v-model='password'/>
        <input type="button"  @click='signIn' value="Login"/>
        <p>{{ip}}</p>
    </form>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'login',
        data(){
            return{
                login: null,
                password: null,
                ip: 'no data from server'
            }
        },

        methods: {
            //Sign in function works correct
            //TODO handle wrong
            signIn(){
                console.log('Passed', this.login, this.password);
                axios.get('question/all', { headers: {'Authorization': 'Basic ' + btoa(this.login + ":" + this.password)}})
                    .then(response => this.ip = response.data)
                    .catch(error => this.ip = error)
            }
        }
    }
</script>
