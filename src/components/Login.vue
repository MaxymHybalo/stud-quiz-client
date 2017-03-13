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
            <p>{{ip}}</p>
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
                ip: "$store.state.ip"
            }
        },

        methods: {
            //Sign in function works correct
            //TODO handle wrong
            signIn(){
                console.log('Passed', this.login, this.password);
                this.ip = axios.get('question/all', { headers: {'Authorization': 'Basic ' + btoa(this.login + ":" + this.password)}})
                    .then(response => this.ip = response.data)
                    .catch(error => {
                        this.ip = error;
                        this.$store.commit('change', error);
            })
        }
    }
}
</script>
