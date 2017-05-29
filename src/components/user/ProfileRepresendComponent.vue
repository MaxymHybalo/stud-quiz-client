<template id="profile-represend-component">
    <div >
        <table v-if="profile!=null" class="table">
            <tr>
                <td><h5>ПІБ:</h5></td>
                <td><h5>{{ fullName }}</h5></td>
            </tr>
            <tr>
                <td><h5>Ел.пошта:</h5></td>
                <td><h5>{{ profile.email }}</h5></td>
            </tr>
            <tr>
                <td><h5>Телефон:</h5></td>
                <td><h5>{{ profile.phone }}</h5></td>
            </tr>
            <tr>
                <td>
                    <a href="#"><h5>Змінити дані...</h5></a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#"><h5>Змінити пароль...</h5></a>
                </td>
            </tr>
        </table>
        <div v-else>
            loading...
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
            this.profile = this.$store.getters.getProfile;
        },
        computed:{
            fullName: function(){
                return this.profile.last + ' ' + this.profile.first + ' ' + this.profile.middle;
            }
        }
    }
</script>
