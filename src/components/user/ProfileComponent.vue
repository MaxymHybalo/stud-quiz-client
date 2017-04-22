<template id="ProfileComponent">
    <div class="panel panel-primary">
        <div class="panel-heading">
            Users profile
        </div>
        <div class="panel-body">
            <h3>{{profile}}</h3>
        </div>
    </div>
</template>
<script>
    import { getQuery, getAuthorizedQuery } from '../../utils/queries.js'
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
        }
    }
</script>
