<template id="admin-category-panel">
    <div class="">
        <div class="row" v-if="permited">
            <div class="col-md-3 btn btn-primary">
                <router-link to="/profile/category">Редактор</router-link>
            </div>
        </div>
        <div class="row">
            <home/>
        </div>
    </div>
</template>
<script>
    import Home from '../Home.vue'
    export default {
        components:{
            Home
        },
        data: function(){
            return{
                role: this.$store.getters.getProfile.role
            }
        },
        computed:{
            permited: function(){
                return this.role == 'TEACHER' || this.role == 'ADMIN';
            }
        }
    }
</script>
<style media="screen">
    div.btn-primary a {
        color: white;
    }
</style>
