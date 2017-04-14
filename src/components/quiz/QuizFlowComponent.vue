<template id="quiz-flow-component">
    <div
    class="col-md-8 mocked">
        <div class="panel panel-success">
            <div class="panel-heading">
                {{quiz.name}}
            </div>
            <div class="panel-body">
                <quiz-case-component
                 :condition='quiz.questions[0].condition'
                 :options='quiz.questions[0].options'
                 @next='iterateQuestion'/>
            </div>
        </div>
    </div>
</template>
<script>
    import QuizCaseComponent from './QuizCaseComponent.vue'
    export default {
        props: ['quiz'],
        data: function(){
            return {

            }
        },
        methods:{
            iterateQuestion(){
                //Add logic for iterate question, and save quiz flow
                console.log("Catched emited method");
            }
        },
        components:{
            QuizCaseComponent
        }
    }
</script>
<style media="screen">
    /*div.mocked {
        background-color: red;
    }*/
</style>
