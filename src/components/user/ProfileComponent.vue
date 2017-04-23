<template id="ProfileComponent">
    <div class="panel panel-primary">
        <div class="panel-heading">
            Профіль {{ profile.role }}
        </div>
        <div class="panel-body">
            <!-- Candidate to  -->
            <div class="row">

                <div class="col-md-3">
                    <profile-menu-component/>
                </div>
                <div class="col-md-9">
                    <profile-represend-component :profile='profile'/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { getQuery, getAuthorizedQuery } from '../../utils/queries.js'
    import ProfileRepresendComponent from './ProfileRepresendComponent.vue'
    import ProfileMenuComponent from './ProfileMenuComponent.vue'

    export default {
        data: function () {
            return{
                profile:null
            }
        },
        created: function(){
            console.log('In profie creation flow ', this.$store.getters.getAuth);
            this.profile = getAuthorizedQuery('/profile', this.$store.getters.getAuth).then(response =>
                {
                    this.profile = response.data;
                    this.$store.commit('SET_PROFILE', response.data);
                    console.log(this.$store.getters.getProfile);
                });
        },
        components:{
            ProfileRepresendComponent,
            ProfileMenuComponent
        }
    }
</script>
