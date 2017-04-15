<template id="quiz-flow-component">
    <div
    class="col-md-8 mocked">
        <div class="panel panel-success">
            <div class="panel-heading">
                Питання {{currentIndex+1}} з {{ maxIndexes }}
            </div>
            <div class="panel-body">
                <quiz-case-component
                v-if="!endpoint"
                 :condition='condition'
                 :options='options'
                 @next='iterateQuestion'
                 @before='beforeQuestion'/>
            </div>
        </div>
    </div>
</template>
<script>
    import QuizCaseComponent from './QuizCaseComponent.vue'
    var quizResultMap = {};
    export default {
        props: ['quiz'],
        data: function(){
            return {
                currentIndex: 0,
                maxIndexes: 0,
                condition: null,
                options: null,
                endpoint: false
            }
        },
        methods:{
            iterateQuestion(values){
                quizResultMap[this.currentIndex] = values;
                if(this.currentIndex != this.maxIndexes - 1){
                    this.currentIndex ++;
                    this.condition = conditionByIndex(this.currentIndex, this.quiz);
                    this.options = optionsByIndex(this.currentIndex, this.quiz);
                }

                if (Object.keys(quizResultMap).length == this.maxIndexes) {
                    console.log("endpoint status changed", quizResultMap);
                    this.endpoint = true;
                }
            },
            beforeQuestion(){
                if(this.currentIndex != 0){
                    this.currentIndex--;
                }
                this.condition = conditionByIndex(this.currentIndex, this.quiz);
                this.options = optionsByIndex(this.currentIndex, this.quiz);
            }
        },
        created:function(){
            this.condition = conditionByIndex(this.currentIndex, this.quiz);
            this.options = optionsByIndex(this.currentIndex, this.quiz);
            this.maxIndexes = this.quiz.questions.length;
            quizResultMap = {};
            console.log("After re-creating component", quizResultMap);
        },
        components:{
            QuizCaseComponent
        }
    }

    function conditionByIndex(index, collection){
        return collection.questions[index].condition;
    }

    function optionsByIndex(index, collection){
        return collection.questions[index].options;
    }
</script>
