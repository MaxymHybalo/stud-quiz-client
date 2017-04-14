<template id="quiz-flow-component">
    <div
    class="col-md-8 mocked">
        <div class="panel panel-success">
            <div class="panel-heading">
                Питання {{currentIndex+1}} з {{ maxIndexes }}
            </div>
            <div class="panel-body">
                <quiz-case-component
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
    export default {
        props: ['quiz'],
        data: function(){
            return {
                currentIndex: 0,
                maxIndexes: 0,
                condition: null,
                options: null
            }
        },
        methods:{
            iterateQuestion(){
                if(this.currentIndex != this.maxIndexes){
                    this.currentIndex ++;
                }
                this.condition = conditionByIndex(this.currentIndex, this.quiz);
                this.options = optionsByIndex(this.currentIndex, this.quiz);
                console.log("Catched emited method");
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
            console.log(this.$router.query);
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
