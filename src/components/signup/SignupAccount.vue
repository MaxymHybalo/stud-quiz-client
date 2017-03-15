<template id="signup-account">
    <div class="panel panel-success">
        <div class="panel-heading">
            Заповніть дані профілю...
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <form>
                    <!-- TODO clear cascade .container-fluid, like in AddCategoryComponent -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3">
                                <div class="form-group">
                                    <label for="login">Логін</label>
                                    <input type="text" class="form-control" id="login" v-model='login' placeholder="Логін"/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Електронна пошта</label>
                                    <input type="email" class="form-control" id="password" v-model='email' placeholder="Емейл"/>
                                </div>
                                <div class="form-group">
                                    <label for="password">Пароль</label>
                                    <input type="password" class="form-control" id="password" v-model='password' placeholder="Пароль"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <button class="col-md-3 col-md-offset-9  btn btn-info" type="button" @click='next'>Далі</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'signup-account',
        data(){
            return {
                login: null,
                email: null,
                password: null
            }
        },
        methods:{
            next(){
                this.$emit('next', this.login, this.email, this.password);
            }
        }
    }
</script>
