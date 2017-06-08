<template lang="html">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Ім'я</th>
                <th>Логін</th>
                <th>Пароль</th>
                <th>Група</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in items" @click="pushDetails(i)">
                <td>{{ i.name }}</td>
                <td>{{ i.login }}</td>
                <td>{{ i.password }}</td>
                <td>{{ i.groupName }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { getAuthorizedQuery } from '../../utils/queries.js'
export default {
    data: function(){
        return {
            items: null
        }
    },
    methods:{
        pushDetails: function(item){
            console.log("Students list: ", item);
            this.$store.commit('SET_USER', item);
            this.$router.push({name: "details", params:{id:item.id}});
            //push logic
        }
    },
    created: function(){
        getAuthorizedQuery("/group/students", this.$store.getters.getAuth)
            .then(response => this.items = response.data)
            .catch();
    }
}
</script>

<style lang="css">
 tr {
     cursor: pointer;
 }
</style>
