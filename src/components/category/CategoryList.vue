<template id="category-list">
    <div class="list-group">
        <error-msg-component v-if="isError" v-bind:msg="errorMsg"/>
        <div v-if="home_view!=true">
            <a
            class="list-group-item router-link-active"
            v-for="item in subjects"
            v-bind:href="'#/category/'+item.id">
            {{item.name}}</a>
        </div>
        <div v-if="home_view==true">
            <a
            class="list-group-item"
            v-for="item in subjects"
            href="#" @click="activate(item)">
            {{item.name}}</a>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import ErrorMsgComponent from '../support/ErrorMsgComponent.vue'
    export default {
        name: 'category-list',
        props: ['home_view'],
        data: function(){
            return{
                subjects: [],
                errorMsg: null,
                isError: false
            }
        },
        methods:{
            activate(item){
                this.$emit("activate", item);
            }
        },
        created: function(){
            console.log(this.$router);
            this.subjects = axios.get('/category/names')
                                .then(response => this.subjects = response.data)
                                .catch(error => {
                                    this.errorMsg = 'Помилка зв\'язку з серверомм';
                                    this.isError = true;});
        },
        components:{
            ErrorMsgComponent
        }

    }
</script>
