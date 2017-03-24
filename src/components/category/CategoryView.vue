<template id="category-view">
    <div class="panel panel-success">
        <div class="panel-heading">
            {{subject.name}}
        </div>
        <div class="panel panel-label">
            <div class="container-fluid" style="padding:1em">
                <div class="row">
                    <div class="col-md-3">
                        <list-counter-component
                            placeholder="Предмет"
                            label="Додати"
                            v-on:added='mergeSubject'></list-counter-component>
                        </div>
                        <div class="col-md-9">
                            <list-component title="Предмети" v-bind:builder='openSubject' v-bind:items='subject.subjects'></list-component>
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
        name: 'category-view',
        data: function(){
            return {
                subject:{},
                newSubject:[]
            }
        },
        created: function(){
            this.subject = axios.get("/category/" + this.$route.params.id)
                                .then(response => this.subject = response.data)
                                .catch(error => console.log(error));
        },
        methods:{
            openSubject(item){
                this.$router.push({path:'/subject/', query: {
                    category: this.$route.params.id,
                    name: item.name,
                    categoryName: this.subject.name}});
            },
            mergeSubject(field){
                this.subject.subjects.push({name:field});
            },
            updateSubject(items){
                this.subject.subjects = items;
            },
            update(){
                axios.post("category/update",this.subject)
            }
        },
        components:{
            ListCounterComponent,
            ListComponent
        }
    }
</script>
