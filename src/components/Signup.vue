<template id="signup">
    <div class="container-fluid">
        <signup-role v-on:next='applyRole' v-if='isSignupRole'></signup-role>
        <signup-account v-on:next='applyAccount' v-if='isSignupAccount'></signup-account>
        <signup-personal v-on:next='applyPersonal' v-if='isSignupPersonal'></signup-personal>
    </div>

</template>
<script>
    import SignupRole from './signup/SignupRole.vue'
    import SignupAccount from './signup/SignupAccount.vue'
    import SignupPersonal from './signup/SignupPersonal.vue'

    export default {
        name: 'signup',
        data(){
            return {
                isSignupRole: true,
                isSignupAccount: false,
                isSignupPersonal: false
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
                //TODO call commit to server method

            }
        },
        components:{
            SignupRole,
            SignupAccount,
            SignupPersonal
        }
    }
</script>
