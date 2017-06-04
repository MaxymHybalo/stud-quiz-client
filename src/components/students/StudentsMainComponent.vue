<template lang="html">
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Ім'я</th>
                <th>Логін</th>
                <th>Пароль</th>
                <th>Група</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in items">
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
    created: function(){
        getAuthorizedQuery("/group/students", this.$store.getters.getAuth)
            .then(response => this.items = response.data)
            .catch();
    }
}
</script>

<style lang="css">
</style>
