<template id="signup">
    <div class="container-fluid">
        <signup-role v-on:next='hideRole' v-if='isSignupRole'></signup-role>
        <signup-account v-if='isSignupAccount'></signup-account>
    </div>

</template>
<script>
    import SignupRole from './signup/SignupRole.vue'
    import SignupAccount from './signup/SignupAccount.vue'

    export default {
        name: 'signup',
        data(){
            return {
                isSignupRole: true,
                isSignupAccount: false
            }
        },
        methods:{
            hideRole(value){
                this.$store.state.user.role = value;
                this.$store.commit('SET_ROLE', value);
                this.isSignupRole = false;
                this.isSignupAccount = true;
                console.log("Store role " + this.$store.state.user.role);
            }
        },
        components:{
            SignupRole,
            SignupAccount
        }
    }
</script>
