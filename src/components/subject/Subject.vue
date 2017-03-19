<template id="subject-component">
    <div class="panel panel-success">
        <div class="panel-heading">
            <a class="router-link-active previous-link" v-bind:href="'#/category/' + $route.query.category">{{$route.query.categoryName}}</a>
            <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            <strong>{{subject.name}}</strong>
        </div>
        <div class="panel panel-label">
            <div class="container-fluid" style="padding:1em">
                <div class="row">
                    <div class="col-md-3">
                        <list-counter-component
                            placeholder="Назва теста"
                            label="Додати"
                            v-on:added='mergeTest'
                            ></list-counter-component>
                        </div>
                        <div class="col-md-9">
                            <list-component title="Тести" v-bind:items='subject.questionCases'></list-component>
                        </div>
                            <router-view></router-view>
                    </div>
                <div class="row">
                    <div class="btn btn-default col-md-3 col-md-offset-8" @click="update">
                        Зберегти
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import ListCounterComponent from '../support/ListCounterComponent.vue'
    import ListComponent from '../support/ListComponent.vue'

    export default {
        name: 'subject-component',
        data: function(){
            return {
                subject: {}
            }
        },
        methods:{
            mergeTest(field){
                if (this.subject.questionCases == null) {
                    this.subject.questionCases = [];
                }
                this.subject.questionCases.push({name: field});
            },
            update(){
                axios.post('subject/update', {params: this.$route.query, data:this.subject});
            }
        },
        created: function(){
            console.log(this.$route.query);
            this.subject = axios.get('/subject/', {params: this.$route.query})
                                .then(response => this.subject = response.data)
                                .catch(error => {
                                    this.errorMsg = 'Помилка зв\'язку з серверомм';
                                    this.isError = true;});
        },
        components:{
            ListCounterComponent,
            ListComponent
        }
    }
</script>
<style>
    .previous-link{
        color: #3c763d;
        /*TODO add hover dependency*/
    }
</style>
