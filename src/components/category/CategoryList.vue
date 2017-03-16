<template id="category-list">
    <div class="list-group">
        <a class="list-group-item router-link-active" v-for="item in subjects" v-bind:href="'#/category/'+item.id">{{item.name}}</a>
</div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'category-list',
        data: function(){
            return{
                subjects: [],
                errorMsg: null,
                isError: false
            }
        },
        created: function(){
            // if(this.$router.params != null){
            //     console.log("URL param: " + this.$router.params.id);
            // }
            console.log(this.$router);
            this.subjects = axios.get('/category/names')
                                .then(response => this.subjects = response.data)
                                .catch(error => {
                                    this.errorMsg = 'Помилка зв\'язку з серверомм';
                                    this.isError = true;});
        }

    }
</script>
