<template id="ProfileComponent">
    <div class="panel panel-primary">
        <div class="panel-heading">
            Профіль користувача
        </div>
        <div class="panel-body" v-if="profile!=null">
            <div class="row">
                <div class="col-md-3">
                    <profile-menu-component/>
                </div>

                <div class="col-md-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import ProfileMenuComponent from './ProfileMenuComponent.vue'
    import { getAuthorizedQuery } from '../../utils/queries.js'
    export default {
        data: function(){
            return {
                profile: null
            }
        },
        components:{
            ProfileMenuComponent
        },
         beforeCreate: function(){
             console.log("Called profile creation hook");
             this.profile = getAuthorizedQuery('/profile', this.$store.getters.getAuth).then(response =>
                 {
                     this.$store.commit('SET_PROFILE', response.data);
                     this.profile = this.$store.getters.getProfile;
                 });
         }
    }
</script>
