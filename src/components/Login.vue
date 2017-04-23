<template id="login">
    <div class="panel panel-success">
        <div class="panel-heading">
            Вхід в StudQuiz
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="form-group">
                                    <label for="login">Логін</label>
                                    <input type="text" class="form-control" id="login" v-model='login' placeholder="Логін"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Пароль</label>
                                    <input type="password" class="form-control" id="password" v-model='password' placeholder="Пароль"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <button class="col-md-3 col-md-offset-9 btn btn-info" type="button" @click='signIn'>Ввійти!</button>
                        </div>
                    </div>
                </form>
            </div>
            <p style="display:none">{{status}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'login',
        data(){
            return{
                login: null,
                password: null,
                status: null
            }
        },

        methods: {
            //Sign in function works correct
            //TODO handle wrong
            signIn(){
                let token = btoa(this.login + ":" + this.password);
                this.status = axios.post('/login', { headers: {'Authorization': 'Basic ' + token}})
                    .then(response =>{
                            if(response.data == 'OK'){
                                this.$store.commit('AUTH_DATA', token),
                                this.$router.push('/profile/user');
                            }
                    })
                    .catch(error => {
                        this.status = error;
                        this.$store.commit('change', error);
            })
        }
    }
}
</script>
