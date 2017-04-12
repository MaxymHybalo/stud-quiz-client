<template id="signup">
    <div class="">

    <!-- <div class="container-fluid"> -->
        <signup-role v-on:next='applyRole' v-if='isSignupRole'></signup-role>
        <signup-account v-on:next='applyAccount' v-if='isSignupAccount'></signup-account>
        <signup-personal v-on:next='applyPersonal' v-if='isSignupPersonal'></signup-personal>
        <div v-if='isSuccessfulMessage' class="alert alert-success" role="alert" style="text-align: center">{{msg}}</div>
    <!-- </div> -->
</div>
</template>
<script>
    import SignupRole from './signup/SignupRole.vue'
    import SignupAccount from './signup/SignupAccount.vue'
    import SignupPersonal from './signup/SignupPersonal.vue'
    import SignupResult from './signup/SignupResult.vue'
    import axios from 'axios'

    function submit(){
        console.log(user);

    }
    export default {
        name: 'signup',
        data(){
            return {
                isSignupRole: true,
                isSignupAccount: false,
                isSignupPersonal: false,
                isSuccessfulMessage: false,
                msg: this.$store.state.message
            }
        },
        methods:{
            applyRole(value){
                this.$store.commit('SET_ROLE', value);
                this.isSignupRole = false;
                this.isSignupAccount = true;
                console.log("Stored role " + this.$store.state.user.role);
            },
            applyAccount(login, email, password){
                this.$store.commit('SET_ACCOUNT', [login, email, password]);
                console.log("Stored login " + this.$store.state.user.login);
                this.isSignupAccount = false;
                this.isSignupPersonal = true;
            },
            applyPersonal(first, last, middle, sex, phone){
                this.$store.commit('SET_PERSONAL', [first, last, middle, sex, phone]);
                console.log('Stored first ' + this.$store.state.user.last);
                this.isSignupPersonal = false;
                this.msg = axios.post("/user/new", this.$store.getters.getUser).then(response =>{
                     this.msg = response.data;
                     this.isSuccessfulMessage = true;
                 });

        }

    },
        components:{
            SignupRole,
            SignupAccount,
            SignupPersonal,
            SignupResult
        }
    }
</script>
