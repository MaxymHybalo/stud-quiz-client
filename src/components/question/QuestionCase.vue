<template id="question-case-component">
    <div class="panel panel-success">
        <div class="panel-heading">
            <a class="router-link-active previous-link"
            v-bind:href="'#/category/' + $route.query.before.category"
            >{{$route.query.before.categoryName}}</a>
            <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            <a class="router-link-active previous-link"
            @click="$router.go(-1)"
            >{{$route.query.before.name}}</a>
            <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            <strong>{{ $route.query.case}}</strong>
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-md-offset-1">
                        <div class="btn btn-info" @click="switchForm">
                            Додати запитання
                        </div>
                    </div>
                </div>
                <div class="row">
                    <add-question v-if='isAddQForm' v-on:save="switchForm"></add-question>
                </div>
            </div>
        </div>
        <div class="panel panel-label">
            <div class="container-fluid">
                <question-case-table :update="isAddQForm"></question-case-table>
            </div>
        </div>
    </div>
</template>
<script>
    import AddQuestion from './AddQuestion.vue'
    import QuestionCaseTable from './QuestionCaseTable.vue'
    export default {
        data: function(){
            return {
                isAddQForm: false
            }
        },
        methods:{
            switchForm(){
                this.isAddQForm = !this.isAddQForm;
            }
        },
        components:{
            AddQuestion,
            QuestionCaseTable
        }
    }
</script>
<style media="screen">
    div .row {
        margin: 0.5em;
    }
</style>
