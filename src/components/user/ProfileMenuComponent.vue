<template id="profile-menu-component">
    <ul class="nav nav-pills nav-stacked">
        <li role="presentation"><router-link to="/profile/user">Профіль</router-link></li>
        <li role="presentation" v-if="teacherPermission"><router-link to="/profile/groups">Групи</router-link></li>
        <li role="presentation" v-if="teacherPermission"><router-link to="/profile/students">Учні</router-link></li>
        <li role="presentation" v-if="doublePermission"><router-link to="">Статистика</router-link></li>
        <li role="presentation"><router-link to="/profile/quiz">Тести</router-link></li>
    </ul>
</template>
<script>
    export default {
        data: function(){
            return{
                teacherPermission: false,
                parentsPermission: false
            }
        },
        created: function(){
            let role = this.$store.getters.getProfile.role;
            this.teacherPermission = role === "TEACHER";
            this.parentsPermission = role === "PARENT";
        },
        computed:{
            doublePermission: function(){
                return this.teacherPermission || this.parentsPermission;
            }
        }
    }
</script>
